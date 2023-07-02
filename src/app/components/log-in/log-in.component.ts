import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  providers: [MessageService],
})
export class LogInComponent {
  isLoading: boolean = false;
  hasError: boolean = false;
  constructor(
    private _authService: AuthService,
    private messageService: MessageService,
    private _router: Router
  ) {
    if(localStorage.getItem('userToken') != null){
      _router.navigate(['/home'])
    }
  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/),
    ]),
  });

  logIn(form: FormGroup) {
    console.log(form);
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._authService.login(form.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.showSuccess();
          localStorage.setItem('userToken', res.token);
          console.log(res.token);
          this._authService.getUserDatAa();
          this._router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
          this.showError(err.error.message);
        },
        complete: () => {
          console.log('complete');
        },
      });
    }
  }
  showError(err: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: err,
    });
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Login Success Welcome Back',
    });
  }
}
