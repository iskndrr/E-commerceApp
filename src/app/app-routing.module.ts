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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  { path: 'catigory', component: CatigoryComponent, title: 'Catigory' },
  { path: 'products', component: ProductsComponent, title: 'Products' },
  { path: 'brands', component: BrandsComponent, title: 'Brands' },
  { path: 'login', component: LogInComponent, title: 'LogIn' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  {path:"**", component:NotfoundComponent,title:"Error 404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
