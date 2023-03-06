import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject, concatMap, fromEvent, of, Observable } from 'rxjs';
import { IAllProducts, IProduct } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CompareService implements OnInit{
  products:IProduct[] = [];

  constructor(private toastr: ToastrService, private http: HttpClient) {
    const storedItems = localStorage.getItem('products')
    if (storedItems != undefined) {
      this.products = JSON.parse(storedItems)
    }
  }
  ngOnInit(): void {
  }
  
  getProductsCompare(productIds: number[]): Observable<any> {
    //Chuyển thành string
    const apiCompareUrl = `http://localhost:3000/api/comparison?productID=${productIds.join(',')}`
    return this.http.get<any>(apiCompareUrl)
  }
  
  private cartSubject = new BehaviorSubject<IProduct[]>([]);

  notificationsSubject = new Subject<string>();
  isNotificationShowing = false;
  
  showSuccessNotification(message: string, title: string) {
    this.toastr.success(message,title);
  }

  showErrorNotification(message: string, title: string) {
    this.toastr.error(message,title);
  }

  showNotification(message: string) {
    const notification = document.createElement('div');
    notification.innerHTML = `
    <div class="fixed bottom-3 right-3 text-white font-medium bg-red-500 flex p-4 items-center justify-center w-64 rounded-lg">
     ${message}
    </div>
    `;

    // Thêm thông báo vào danh sách chờ, nếu có thông báo thì chờ
    this.notificationsSubject.next(message);
    if (!this.isNotificationShowing) {
      document.body.appendChild(notification);
      
      this.isNotificationShowing = true;
      setTimeout(() => {
        this.notificationsSubject.next('');
        this.isNotificationShowing = false;
        document.body.removeChild(notification);
      }, 2000);
    }
  }
  
  addToCart(item:IProduct) {
    // Nếu có sản phẩm trùng, thì hiện ra thông báo
    const existingItemIndex = this.products.find(i => i.id === item.id);

    if (this.products.length >= 4) {
      this.showErrorNotification('You can only choose 4 products','Oops' );
    }
    else if (existingItemIndex) {
      this.showErrorNotification('Please pick another product','Oops' );
      // this.showNotification('Product ready to compare');
    }
    else {
      this.products.push(item);
      this.showSuccessNotification('Product added successfully','Success');
      //Truyền vào items để Subject (Ob) theo dõi
      this.cartSubject.next(this.products);
      
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  getCount() {
    return this.products.length;
    // const storedItems = JSON.parse(localStorage.getItem('products') || '{}')
    //   return storedItems.length
  }

  getNotifications() {
    return this.notificationsSubject.asObservable();
  }


  
}


