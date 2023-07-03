import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  productDetails: Product = {} as Product;
  responsiveOptions: any[] | undefined;
  position: any = 'left';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {}
  ngOnInit(): void {
    this.getId();
    this.getProducById();


    // this.positionOptions = [
    //     {
    //         label: 'Bottom',
    //         value: 'bottom'
    //     },
    //     {
    //         label: 'Top',
    //         value: 'top'
    //     },
    //     {
    //         label: 'Left',
    //         value: 'left'
    //     },
    //     {
    //         label: 'Right',
    //         value: 'right'
    //     }
    // ];
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



}
