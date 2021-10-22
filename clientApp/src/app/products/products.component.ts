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
  constructor(private productService: ProductService) {
     this.products = this.productService.getProducts();
     
  }
 
  ngOnInit(): void {}
}
