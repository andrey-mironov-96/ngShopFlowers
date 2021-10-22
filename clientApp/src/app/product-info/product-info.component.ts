import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: 'no name',
    description: 'no description',
    price: 0
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let productId: number = 0;
    this.activatedRoute.params.subscribe((params) => {
      productId = params['id'];
    });
    this.productService.getProduct(productId).subscribe(
      (response) => {
        console.log(response);
        this.product = response[0];
      },
      (error) => console.log(error)
    );
  }
}
