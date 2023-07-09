import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [MessageService],
})
export class ProductCardComponent {
  constructor(
    private _router: Router,
    private messageService: MessageService,
    private _cartService: CartService
  ) {}
  hearts: number[] = [1, 2];
  @Input() product: Product = {} as Product;
  addToCart(e: any, id: string) {
    this.stopPropgation(e);
    this._cartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.showSuccess();
      },
      error: (err) => {
        console.log(err);
        this.showError(err);
      },
    });
  }
  stopPropgation(e: any) {
    // alert('done');
    // console.log(e);
    e.stopPropagation();
  }

  goDetails(id: string) {
    // alert("hiiiiii")
    console.log(id);
    this._router.navigate([`/productDetails/${id}`]);
  }

  showError(err: any) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: err.error.message,
    });
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product added successfully to your cart',
    });
  }
}
