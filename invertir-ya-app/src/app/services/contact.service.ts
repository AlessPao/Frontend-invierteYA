import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url: string = `${environment.api}/contacts`;

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(data: Contact)
  {
    return this.http.post<Contact>(`${this.url}`, data);
  }

  findAll()
  {
    return this.http.get<Contact[]>(`${this.url}`);
  }

  delete(id: number)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
}
