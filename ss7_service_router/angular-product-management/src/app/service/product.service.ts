import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }

  saveProduct(event: any) {
    // tslint:disable-next-line:no-debugger
    debugger;
    return this.httpClient.post('http://localhost:3000/products/', event);
  }

  editProduct(id: number, product) {
    // @ts-ignore
    return this.httpClient.put('http://localhost:3000/products/' + id, product);
  }

  findById(id: number) {
      return this.httpClient.get<Product>('http://localhost:3000/products/' + id);
  }

  deleteProduct(id: number) {
      return this.httpClient.delete('http://localhost:3000/products/' + id);
  }

  searchByNameAndCategory(nameSearch: string, categoryId: number) {
    // const text = JSON.stringify(category);
    return this.httpClient.get<Product[]>('http://localhost:3000/products?name_like=' + nameSearch + '&category.id=' + categoryId);
  }
  searchName(nameSearch: string) {
    return this.httpClient.get<Product[]>('http://localhost:3000/products?name_like=' + nameSearch);
  }
}
