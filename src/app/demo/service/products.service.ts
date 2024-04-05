import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsSmall() {
    return this.http.get<any>('../../assets/demo/data/products-small.json')
      .toPromise()
      .then(res => res.data as Product[])
      .then(data => data);
  }
}
