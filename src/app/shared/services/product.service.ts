import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { }

  getAllProduct(): Observable<any>{
   return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
}
