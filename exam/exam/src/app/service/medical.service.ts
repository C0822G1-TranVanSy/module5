import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medical} from '../model/medical';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Medical[]> {
    return this.httpClient.get<Medical[]>('http://localhost:8080/medicals');
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:8080/medicals/' + id);
  }

  update(medical: Medical) {
    return this.httpClient.put('http://localhost:8080/medicals/', medical);
  }

  findById(id: number) {
    return this.httpClient.get<Medical>('http://localhost:8080/medicals/' + id);
  }

  add(medical: Medical) {
    return this.httpClient.post('http://localhost:8080/medicals/', medical);
  }
}
