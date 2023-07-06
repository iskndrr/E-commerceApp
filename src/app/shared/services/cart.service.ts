import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  token: string | null = '';
  constructor(private _httpClient: HttpClient) {}
  addToCart(id: string): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: id },
      {
        headers: {
          token: `${this.token}`,
        },
      }
    );
  }
  getCart(): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: {
        token: `${this.token}`,
      },
    });
  }
  updateCart(id:string,count:number): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      count:count
    }, {
      headers: {
        token: `${this.token}`,
      },
    });
  }
  removeProduct(id:string): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
   {
      headers: {
        token: `${this.token}`,
      },
    });
  }
  deleteCart(): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
   {
      headers: {
        token: `${this.token}`,
      },
    });
  }
}
