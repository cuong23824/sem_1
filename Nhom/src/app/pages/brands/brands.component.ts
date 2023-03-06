import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBrands } from 'src/app/brands';
import { ProductService } from 'src/app/services/product.service';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html' ,
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands: IBrands | any
  isLoading$ = this.progressService.isLoading$

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private progressService: ProgressBarService) {
  }

  // const productIdFromRoute = String(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    //Mặc định là show progressbar
    this.progressService.show();

    this.productService.getAllBrands().subscribe(brands => {
      this.brands = brands
      this.progressService.hide();
     
    })
  }


}
