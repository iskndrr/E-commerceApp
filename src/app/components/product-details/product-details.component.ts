import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [MessageService],
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  productDetails: Product = {} as Product;
  responsiveOptions: any[] | undefined;
  position: any = 'left';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private _cartService: CartService,
    private _productService: ProductService
  ) {}
  ngOnInit(): void {
    this.getId();
    this.getProducById();
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 5,
      },
      {
        breakpoint: '560px',
        numVisible: 5,
      },
    ];
  }
  
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
  getId() {
    this._activatedRoute.paramMap.subscribe({
      next: (res: any) => {
        this.productId = res.params.id;
        console.log(this.productId);
      },
    });
  }

  getProducById() {
    this._productService.getProductById(this.productId).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productDetails = res.data;
        console.log(this.productDetails.images);
      },
    });
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
      detail: 'Product added successfully to your cart',
    });
  }
}
