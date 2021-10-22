import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBasket } from '../models/basket';
import { IProduct } from '../models/product';
import { BasketService } from '../services/basket.service';
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

  count = "1";
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
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
  addToBasket(){
    let basket: IBasket = {
      
      product: this.product.name,
      price: this.product.price,
      count: +this.count
    }
    console.log(basket);
    this.basketService.setProduct(basket);  
  }
}
