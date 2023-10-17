import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  url = 'https://swapi.dev/api/people/?page=';
  constructor(private http: HttpClient) {}

  getEmpList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + 1);
  }
}
