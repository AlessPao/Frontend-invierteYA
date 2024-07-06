import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Auth } from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = `${environment.api}/users`;

  constructor(
    private http: HttpClient
  ) { }

  login(data: Auth)
  {
    return this.http.post<any>(`${this.url}/login`, data);
  }
}
