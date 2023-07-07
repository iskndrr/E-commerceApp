import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CatigoryComponent } from './components/catigory/catigory.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { authGuard } from './shared/guard/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllordersComponent } from './components/allorders/allorders.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate:[authGuard], component: HomeComponent, title: 'Home' },
  { path: 'profile' ,  canActivate:[authGuard],component: ProfileComponent, title: 'Profile' },
  { path: 'catigory',  canActivate:[authGuard],component: CatigoryComponent, title: 'Catigory' },
  { path: 'products',  canActivate:[authGuard],component: ProductsComponent, title: 'Products' },
  { path: 'allorders',  canActivate:[authGuard],component: AllordersComponent, title: 'allorders' },
  { path: 'productDetails/:id',  canActivate:[authGuard],component: ProductDetailsComponent, title: 'ProductDetails' },
  { path: 'checkOut/:id',  canActivate:[authGuard], component: CheckOutComponent, title: 'checkOut' },
  { path: 'brands',  canActivate:[authGuard], component: BrandsComponent, title: 'Brands' },
  { path: 'login', component: LogInComponent, title: 'LogIn' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:"**", component:NotfoundComponent,title:"Error 404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
