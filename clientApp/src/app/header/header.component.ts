import { Component, DoCheck, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  countProductInBasket: number = 0;
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {}
  ngDoCheck() {
   this.countProductInBasket=  this.basketService.getCountProductsInBasket();
  }
}
