import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {IProduct} from "../../product";
import {CompareService} from "../../services/compare.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent {
  show = false;

  messageToChild = 'Chưa có thông báo';
  showNotification() {
    this.show = true;
  }
  closeNotification() {
    this.show = false;
  }

  //HostListener dùng để lắng nghe sự kiện click ở trong document, mỗi khi có click sẽ gọi đến hàm onDocumentClick
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    //Nếu click ra bên ngoài Icon và bên ngoài notification thì mới thoát
    const iconElement = this.ElementRef.nativeElement.querySelector('.iconNotification');
    // const childComponent = this.ElementRef.nativeElement.querySelector('app-notification');
    if (!iconElement.contains(event.target)) {
      this.closeNotification();
    }
  }

  cartItems: IProduct[] = [];
  countItem = 0;

  constructor(private ElementRef: ElementRef, private compareService:CompareService, private viewportScroller: ViewportScroller) {
    this.compareService.getCart().subscribe(items => {
      this.cartItems = items;
      this.countItem = this.compareService.getCount();
    });
  }

  @ViewChild('scrollTop', { static: true }) scrollTop!: ElementRef;

  // scrollToTop() {
  //     this.scrollTop.nativeElement.scrollIntoView();
  // }

  scrollToTop() {
    this.viewportScroller.scrollToAnchor('scrollTop')
  }


}
