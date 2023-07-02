import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  register(data:any): Observable<any>{
   return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,data)
  }
}
