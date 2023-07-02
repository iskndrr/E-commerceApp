import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent {
  isLoading: boolean = false;
  hasError: boolean = false;
  constructor(
    private _authService: AuthService,
    private messageService: MessageService,
    private _router:Router
  ) {
    if(localStorage.getItem('userToken') != null){
      _router.navigate(['/home'])
    }
  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{2,10}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

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
      detail: 'Account Created',
    });
  }
  register(form: FormGroup) {
    console.log(form);
    if (this.registerForm.valid) {
      this.isLoading = true;
      this._authService.register(form.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          this.showSuccess();
          this._router.navigate(["/login"])
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
          // this.hasError =true;
          this.showError(err.error.message);
        },
        complete: () => {
          console.log('complete');
        },
      });
    }
  }
}
