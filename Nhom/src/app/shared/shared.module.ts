import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';

import { NotificationComponent } from './notification/notification.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';

import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';





const MaterialModule = [MatSelectModule, MatRippleModule, MatProgressBarModule, MatButtonToggleModule]

@NgModule({
  //Khai báo các component
  declarations: [
    MenuComponent,
    MenuHomeComponent,
    FooterComponent,
    BreadcumbComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],

  //Exports component để app-module dùng
  exports: [
    MenuComponent,
    MenuHomeComponent,
    FooterComponent,
    BreadcumbComponent,
    NotificationComponent,
    MaterialModule
  ]
})
export class SharedModule { }
