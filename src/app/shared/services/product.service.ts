import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }

  getCategories(): Observable<any>{
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getBrands(): Observable<any>{
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  // getSpecificCategory(id:string): Observable<any>{
  //  return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  // }
  getAllProduct(): Observable<any>{
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  getProductById(id:string): Observable<any>{
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
}
