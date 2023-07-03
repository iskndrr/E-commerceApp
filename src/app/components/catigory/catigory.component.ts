import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/shared/interfaces/categories';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-catigory',
  templateUrl: './catigory.component.html',
  styleUrls: ['./catigory.component.scss'],
})
export class CatigoryComponent implements OnInit {
  categories: Categories[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this.getCategories();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 8,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 4,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 3,
        numScroll: 1,
      },
    ];
  }

  getCategories() {
    this._productService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data
        console.log(this.categories);
      },
    });
  }
  getCatProd(id:string){
    console.log(id);

  }
}
