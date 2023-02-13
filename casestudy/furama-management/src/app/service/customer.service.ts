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
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers');
  }

  add(customer: Customer) {
    return this.httpClient.post('http://localhost:3000/customers', customer);
  }
}
