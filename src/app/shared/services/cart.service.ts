import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  token: string | null = ''
  constructor(private _httpClient: HttpClient) {}
  addToCart(id: string): Observable<any> {
    this.token = localStorage.getItem("userToken")
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
}
