import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLogedIn: boolean = false;
  constructor(private _authService: AuthService) {
    this._authService.userData.subscribe((res) => {
      console.log(res);

      if (this._authService.userData.getValue()) {
        this.isLogedIn = true
      }else{
        this.isLogedIn = false
      }
    });
  }

  logOut(){
    this._authService.logOut()
  }
}
