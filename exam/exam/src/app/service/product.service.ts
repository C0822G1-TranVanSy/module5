import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  deleteProduct(id: number) {
    return this.httpClient.delete('http://localhost:3000/products/' + id);
  }

  addProduct(value: any) {
    return this.httpClient.post('http://localhost:3000/products/', value);
  }

  findById(id: number) {
    return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }

  update(product: Product) {
    return this.httpClient.put('http://localhost:3000/products/' + product.id, product);
  }
}
