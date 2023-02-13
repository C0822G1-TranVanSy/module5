import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../model/customer-type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>('http://localhost:3000/customerTypes');
  }
}
