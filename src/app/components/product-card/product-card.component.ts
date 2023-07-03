import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  constructor(private _router:Router){}
  hearts: number[] = [1, 2];
  @Input() product: Product = {} as Product;

  stopPropgation(e:any) {
    alert("done")
    console.log(e);
    e.stopPropagation();

  }

  goDetails(id:string){
    // alert("hiiiiii")
    console.log(id);
    this._router.navigate([`/productDetails/${id}`])

  }
}
