import { Component, OnInit } from '@angular/core';
import { IBasket } from '../models/basket';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService) { }
  productsInBasket: IBasket[] | null = [];
  ngOnInit(): void {
    this.productsInBasket = this.basketService.getProducts();
  }

}
