import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/product';
import { CompareService } from 'src/app/services/compare.service';
import slugify from 'slugify';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

interface SortBy {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-brand-name',
  templateUrl: 'brand-name.component.html',
  styleUrls: ['./brand-name.component.scss']
})

export class BrandNameComponent {
  products: IProduct[] | any
  isLoading$ = this.progressService.isLoading$
  page: number = 1;
  productCount: number = 0

  sortBy: SortBy[] = [
    {value: 'lth', viewValue: 'Low to High'},
    {value: 'steak-0', viewValue: 'High to Low'},
    {value: 'pizza-1', viewValue: 'Name'},
    {value: 'tacos-2', viewValue: 'Date'},
  ];
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private compareService: CompareService,
    private progressService: ProgressBarService) {
  }

  ngOnInit(): void {
    //Mặc định là show progressbar
    this.progressService.show();

    const productIdFromRoute = String(this.route.snapshot.paramMap.get('brandName'));

    this.productService.getBrands(productIdFromRoute).subscribe((products) => {
      if (products === null) {
        this.router.navigate(['/page-not-found'])
      }
      else {
        this.products = products
        this.productCount = products.length
        this.progressService.hide();
      }
      
    })
  }

  addToCompare(product: IProduct) {
      this.compareService.addToCart(product);
  }

  slugifyProductName(productName: string): string {
    return slugify(productName, { lower: true, remove: /[*+~.()'"!:@]/g });
  }
}
