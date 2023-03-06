import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IBrands } from '../brands';
import { ICamera, ICellular, IConnectivity, IDesign, IDisplay, IHardware, IMultimedia, IProduct } from '../product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }
  

  private apiProductUrl = 'http://localhost:3000/api/product'
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiProductUrl)
  }

  private apiBrandUrl = 'http://localhost:3000/api/brands'
  getAllBrands(): Observable<IBrands[]> {
    return this.http.get<IBrands[]>(this.apiBrandUrl)
  }

  private apiDisplayUrl = 'http://localhost:3000/api/products/display'
  getProductsDisPlay(): Observable<IDisplay[]> {
    return this.http.get<IDisplay[]>(this.apiDisplayUrl)
  }

  private apiHardwareUrl = 'http://localhost:3000/api/products/hardware'
  getProductsHardware(): Observable<IHardware[]> {
    return this.http.get<IHardware[]>(this.apiHardwareUrl)
  }

  private apiCameraUrl = 'http://localhost:3000/api/products/camera'
  getProductsCamera(): Observable<ICamera[]> {
    return this.http.get<ICamera[]>(this.apiCameraUrl)
  }

  private apiDesignUrl = 'http://localhost:3000/api/products/design'
  getProductsDesign(): Observable<IDesign[]> {
    return this.http.get<IDesign[]>(this.apiDesignUrl)
  }

  private apiCellularUrl = 'http://localhost:3000/api/products/cellular'
  getProductsCellular(): Observable<ICellular[]> {
    return this.http.get<ICellular[]>(this.apiCellularUrl)
  }

  private apiIMultimediaUrl = 'http://localhost:3000/api/products/multimedia'
  getProductsMultimedia(): Observable<IMultimedia[]> {
    return this.http.get<IMultimedia[]>(this.apiIMultimediaUrl)
  }

  private apiConnectivityUrl = 'http://localhost:3000/api/products/connectivity'
  getProductsConnectivity(): Observable<IConnectivity[]> {
    return this.http.get<IConnectivity[]>(this.apiConnectivityUrl)
  }
  
  //Method trả về Observable, giữ kiểu IProduct[] hoặc null (nắm dữ liệu)
  getBrands(productIdFromRoute: string): Observable<IProduct[] | null> {
    const apiBrandUrl  = `http://localhost:3000/api/brands/${productIdFromRoute}`

    return this.http.get<IProduct[]>(apiBrandUrl).pipe(
      catchError(err => {
        if (err.status === 404) {
          return of(null);
        }
        //Bắt lỗi khác ngoài 404
        else {
          throw err;
        }
      })
    );
  }

}

