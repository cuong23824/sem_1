import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { HomeComponent } from './pages/home/home.component';
import { BrandNameComponent } from './pages/brand-name/brand-name.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ComparisionComponent } from './pages/comparision/comparision.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    ProductComponent,
    HomeComponent,
    BrandNameComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AboutUsComponent,
    ComparisionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      progressBar: true
    }),
    NgxPaginationModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
