import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mortgage } from '../model/mortgage.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {

  private url: string = `${environment.api}/calculators`;

  constructor(
    private http: HttpClient
  ) { }

  mortgage(data: Mortgage)
  {
    return this.http.post<any>(`${this.url}/mortgage`, data);
  }
}
