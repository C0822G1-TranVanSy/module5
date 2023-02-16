import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhAn} from '../model/benh-an';

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>('http://localhost:3000/benhAns');
  }
}
