import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers?_sort=customerName&_order=desc');
  }

  findById(id: number) {
    return this.httpClient.get<Customer>('http://localhost:3000/customers/' + id);
  }

  add(customer: Customer) {
    return this.httpClient.post('http://localhost:3000/customers', customer);
  }

  edit(value: any) {
    return this.httpClient.put('http://localhost:3000/customers/' + value.id, value);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/customers/' + id);
  }

  searchAll(nameSearch: string, emailSearch: string, customerTypeId: number) {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers?customerName_like=' + nameSearch
    + '&email_like=' + emailSearch + '&customerType.id=' + customerTypeId);
  }

  searchByNameAndEmail(nameSearch: string, emailSearch: string) {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers?customerName_like=' + nameSearch
    + '&email_like=' + emailSearch);
  }
}
