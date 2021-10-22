import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  constructor() {
    this.product = {
      id: 0,
      name: 'no-name',
      description: 'no-description',
      price: 0
    };
  }
  
  ngOnInit(): void {}
}
