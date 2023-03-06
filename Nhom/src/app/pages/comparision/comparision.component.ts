import { Component, OnInit } from '@angular/core';
import { IAllProducts, IDisplay, IProduct } from 'src/app/product';
import { CompareService } from 'src/app/services/compare.service';
import { ProductService } from 'src/app/services/product.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-comparision',
  templateUrl: './comparision.component.html',
  styleUrls: ['./comparision.component.scss']
})
export class ComparisionComponent implements OnInit{
  products:any
  displays: IDisplay[] = []
  // productIDs!: IProduct[]
  constructor(private compareService: CompareService, private productService: ProductService) {
    // const storedItems = localStorage.getItem('products');
    
    // //Chuyển từ JSON sang Object
    // if (storedItems != undefined) {
    //   this.products = JSON.parse(storedItems);
    // }

    // console.log(storedItems);
    // console.log(this.products);
    this.compareService.getProductsCompare([2,6,3,5]).subscribe (products => {
      this.products = products;
      console.log(this.products);
    })
  }
  
  
  ngOnInit(): void {
    
    
    
  }
 
  
}
