import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject('');
  constructor(private _httpClient: HttpClient,
    private _router:Router) {
    if (localStorage.getItem('userToken')) {
      this.getUserDatAa();
    }
  }
  getUserDatAa() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);
    this.userData.next(decodedToken);
  }
  register(data: any): Observable<any> {
    return this._httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      data
    );
  }
  login(data: any): Observable<any> {
    return this._httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signin`,
      data
    );
  }
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null)
    this._router.navigate(['/login'])
  }
}
