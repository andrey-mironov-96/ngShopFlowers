import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Array<IProduct> {
    let data: Array<IProduct> = [];
    this.http.get<Array<IProduct>>('http://fowers/read_products.php').subscribe(
      (response) => {
        console.log(response);
        data.push(...response);
      },
      (error) => console.log(error)
    );
    return data;
  }

  getProduct(idProduct: number) {
   return this.http
      .get<IProduct[]>(`http://fowers/read_product.php/?id=${idProduct}`)
     
  }
}
