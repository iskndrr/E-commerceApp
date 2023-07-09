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

    );
  }
  getCart(): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, );
  }
  updateCart(id: string, count: number): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: count,
      },

    );
  }
  removeProduct(id: string): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,

    );
  }
  deleteCart(): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,

    );
  }
  checkOut(id: string, shippingAddress: any): Observable<any> {
    this.token = localStorage.getItem('userToken');
    return this._httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {
        shippingAddress: shippingAddress,
      },
      
    );
  }
}
