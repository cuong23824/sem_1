import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICamera, ICellular, IConnectivity, IDesign, IDisplay, IHardware, IMultimedia, IProduct } from 'src/app/product';
import { CompareService } from 'src/app/services/compare.service';
import { ProductService } from 'src/app/services/product.service';
import * as _ from "lodash";
import slugify from 'slugify';
import { ProgressBarService } from 'src/app/services/progress-bar.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: IProduct | undefined
  productId!: number;
  productName!: string;
  isLoading$ = this.progressService.isLoading$

  displays: IDisplay | undefined
  hardwares: IHardware | undefined
  camera: ICamera | undefined
  design: IDesign | undefined
  cellular: ICellular | undefined
  multimedia: IMultimedia | undefined
  connectivity: IConnectivity | undefined
  

  constructor(private compareService: CompareService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private progressService: ProgressBarService) {
  }
  
  ngOnInit(): void {
    //Mặc định là show progressbar
    this.progressService.show();

    // const productIdFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    //Lấy Route Parameters để so sánh 
    this.route.params.subscribe(params => {
      this.productName = params['name'];
      
      // Tìm sản phẩm theo tên
      this.productService.getProducts().subscribe((products) => {
        this.products = products.find(product => this.slugifyProductName(product.name) === this.productName);

      // Tiện thể tìm luôn ID
        if (this.products) {
          this.productId = this.products.id;
          
        }
      });
    });

    this.productService.getProducts().subscribe((products) => {
        this.products = products.find(product => product.id === this.productId)
        localStorage.setItem('products', JSON.stringify(this.products));
    })

    this.productService.getProductsDisPlay().subscribe((displays) => {
      this.displays = displays.find(displays => displays.id === this.productId)
    })

    this.productService.getProductsHardware().subscribe((hardwares) => {
      this.hardwares = hardwares.find(hardwares => hardwares.id === this.productId)
    })

    this.productService.getProductsCamera().subscribe((camera) => {
      this.camera = camera.find(camera => camera.id === this.productId)
    })

    this.productService.getProductsDesign().subscribe((design) => {
      this.design = design.find(design => design.id === this.productId)
    })

    this.productService.getProductsCellular().subscribe((cellular) => {
      this.cellular = cellular.find(cellular => cellular.id === this.productId)
    })

    this.productService.getProductsMultimedia().subscribe((multimedia) => {
      this.multimedia = multimedia.find(multimedia => multimedia.id === this.productId)
    })

    this.productService.getProductsConnectivity().subscribe((connectivity) => {
      this.connectivity = connectivity.find(connectivity => connectivity.id === this.productId)
      this.progressService.hide();
    },
    )
  }
   
  slugifyProductName(productName: string): string {
    return slugify(productName, { lower: true, remove: /[*+~.()'"!:@]/g });
  }

  addToCompare() {
    if (this.products) {
      this.compareService.addToCart(this.products);
    }
  }


 
} 
