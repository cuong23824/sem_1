import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { BrandNameComponent } from './pages/brand-name/brand-name.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ComparisionComponent } from './pages/comparision/comparision.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about-us', component: AboutUsComponent, title: 'About Us' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'forgot-password', component: ForgotPasswordComponent, title: 'Forgot password' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'products/comparison', component: ComparisionComponent},
  { path: 'product/:name', component: ProductComponent},
  { path: 'products/comparison', component: MenuComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'brands/:brandName', component: BrandNameComponent },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
