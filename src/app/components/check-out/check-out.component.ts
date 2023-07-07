import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
  providers: [MessageService],
})
export class CheckOutComponent implements OnInit {
  cartId: string = '';
  isLoading: boolean = false;
  paymentUrl: string = '';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService,
    private messageService: MessageService,
    private _router: Router
  ) {}

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  });

  ngOnInit(): void {
    this.getId();
  }
  checkOut() {
    console.log(this.shippingAddress);

    this._cartService
      .checkOut(this.cartId, this.shippingAddress.value)
      .subscribe({
        next: (res) => {
          this.showSuccess();
          this.paymentUrl = res.session.url;
          console.log(res, this.paymentUrl);
          if(res.status =="success"){
            this.goPay()
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getId() {
    this._activatedRoute.paramMap.subscribe({
      next: (res: any) => {
        this.cartId = res.params.id;
        console.log(this.cartId);
      },
    });
  }

  showError(err: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      // detail: err,
    });
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      // detail: 'Login Success Welcome Back',
    });
  }

  goPay() {
    window.location.href = this.paymentUrl
  }
}
