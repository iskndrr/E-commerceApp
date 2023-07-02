import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProduct: Product[] = [];
  constructor(private _productService: ProductService) {}
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this._productService.getAllProduct().subscribe({
      next: (res) => {
        console.log(res, res.data);
        this.allProduct = res.data;
        console.log(this.allProduct);
      },
    });
  }
}
