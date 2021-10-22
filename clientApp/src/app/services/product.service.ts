import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(page: number) {
    return this.http.get<IProduct[]>(
      `http://fowers/read_products.php/?page=${page}`
    );
  }

  getProduct(idProduct: number) {
    return this.http.get<IProduct[]>(
      `http://fowers/read_product.php/?id=${idProduct}`
    );
  }
  getCountPages() {
    return this.http.get<number>(`http://fowers/get_total_pages.php`);
  }
}
