import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhNhan} from '../model/benh-nhan';

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<BenhNhan[]> {
    return this.httpClient.get<BenhNhan[]>('http://localhost:3000/benhNhans');
  }

  edit(value: any) {
    return this.httpClient.put('http://localhost:3000/benhNhans/' + value.id , value);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/benhNhans/' + id);
  }

  findById(id: number) {
    return this.httpClient.get<BenhNhan>('http://localhost:3000/benhNhans/' + id);
  }
}
