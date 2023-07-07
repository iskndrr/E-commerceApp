import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from '../shared/interfaces/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = {} as Cart;
  count: number = 0;
  cartId: string = '';
  constructor(private _cartService: CartService,
    private _router:Router) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this._cartService.getCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cart = res;
        this.cartId = res.data._id;
        console.log(this.cartId);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateCart(id: string, count: number) {
    this._cartService.updateCart(id, count).subscribe({
      next: (res) => {
        console.log(res);
        this.getCart();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removProduct(id: string) {
    this._cartService.removeProduct(id).subscribe({
      next: (res) => {
        this.getCart();
      },
    });
  }
  deleteCart() {
    this._cartService.deleteCart().subscribe({
      next: (res) => {
        console.log(res);
        this.getCart();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  checkOut(id: string ) {
    console.log(id);
    this._router.navigate([`/checkOut/${id}`])
  }
}
