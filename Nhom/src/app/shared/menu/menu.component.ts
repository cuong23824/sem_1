import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CompareService } from 'src/app/services/compare.service';
import { IProduct } from 'src/app/product';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { switchMap, debounceTime } from 'rxjs/operators';
import slugify from 'slugify';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    //Notification
    show = false;
    messageToChild = 'Chưa có thông báo';

    //Cart
    cartItems: IProduct[] = [];
    countItem!: number;

    //Search
    searchInput = new FormControl();
    suggestions: IProduct[] = [];
    inputClicked: boolean = false

    constructor(private ElementRef: ElementRef,
        private compareService: CompareService,
        private searchService: SearchService,
        private viewportScroller: ViewportScroller) {
    }

    ngOnInit(): void {
        this.compareService.getCart().subscribe(items => {
            this.cartItems = items;
            this.countItem = this.compareService.getCount();
        })

        this.searchInput.valueChanges.pipe(
            debounceTime(200),
            switchMap((value: string) => this.searchService.getSuggestions(value))
        ).subscribe((suggestions: IProduct[]) => {
            this.suggestions = suggestions;
        });

    }


    @ViewChild('scrollTop', { static: true }) scrollTop!: ElementRef;

    // scrollToTop() {
    //     this.scrollTop.nativeElement.scrollIntoView();
    // }


    //HostListener dùng để lắng nghe sự kiện click ở trong document, mỗi khi có click sẽ gọi đến hàm onDocumentClick
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        //Nếu click ra bên ngoài Icon và bên ngoài notification thì mới thoát
        const iconElement = this.ElementRef.nativeElement.querySelector('.iconNotification');
        // const childComponent = this.ElementRef.nativeElement.querySelector('app-notification');
        if (!iconElement.contains(event.target)) {
            this.closeNotification();
        }

        const iconElement1 = this.ElementRef.nativeElement.querySelector('input');
        // const childComponent = this.ElementRef.nativeElement.querySelector('app-notification');
        if (!iconElement1.contains(event.target)) {
            // this.suggestions = []
            this.inputClicked = false
        }
    }

    slugifyProductName(productName: string): string {
        return slugify(productName, { lower: true, remove: /[*+~.()'"!:@]/g });
    }

    showNotification() {
        this.show = true;
    }
    closeNotification() {
        this.show = false;
    }

    scrollToTop() {
        this.viewportScroller.scrollToAnchor('scrollTop')
    }


}
