import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Array<IProduct> = [];
  countPages: number = 0;
  currentPage: number = 1;
  constructor(private productService: ProductService) {
     this.productService.getCountPages().subscribe(response => {
      this.countPages = response;
     });
    this.getProductsOfPage(this.currentPage);
     
  }
 
  ngOnInit(): void {}

  getProductsOfPage(page: number){
    this.productService.getProducts(page)
      .subscribe(response => {
        this.products = response;
      })
      this.currentPage = page;
  }

  previousPage(){
    if (this.currentPage != 1){
      this.getProductsOfPage(this.currentPage - 1);
    }
  }

  nextPage(){
    if (this.currentPage != this.countPages){
      this.getProductsOfPage(this.currentPage + 1);
    }
  }


}
