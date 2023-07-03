import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/shared/interfaces/brands';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brands: Brands[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this.getBrands();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 12,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 8,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 6,
        numScroll: 1,
      },
    ];
  }
  getBrands() {
    this._productService.getBrands().subscribe({
      next: (res) => {
        this.brands = res.data
        console.log(res);
      },
    });
  }
}
