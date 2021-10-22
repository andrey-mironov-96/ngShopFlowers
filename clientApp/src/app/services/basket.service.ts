import { Injectable } from '@angular/core';
import { IBasket } from '../models/basket';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  key: string = 'shop-flowers';
  constructor() {}

  getProducts() {}

  setProduct(productBasket: IBasket) {
    const strLocalStorage: string | null = localStorage.getItem(this.key);
    let productsInBasket: IBasket[] = [];
    if (strLocalStorage && strLocalStorage.length > 0) {
      productsInBasket = JSON.parse(strLocalStorage);
      let isQuals: boolean = false;
      productsInBasket.map((item: IBasket) => {
        if (
          item.product.toLowerCase() === productBasket.product.toLowerCase()
        ) {
          item.count += productBasket.count;
          isQuals = true;
        }
      });
      if (!isQuals) {
        productBasket.index = productsInBasket.length + 1;
        productsInBasket.push(productBasket);
      }
    } else {
      productBasket.index = 1;
      productsInBasket.push(productBasket);
    }
    localStorage.setItem(this.key, JSON.stringify(productsInBasket));
  }
  getCountProductsInBasket() : number {
    const strLocalStorage: string | null = localStorage.getItem(this.key);
    if (strLocalStorage && strLocalStorage.length > 0) {
      return (JSON.parse(strLocalStorage) as IBasket[]).length;
    }
    return 0;
  }
}
