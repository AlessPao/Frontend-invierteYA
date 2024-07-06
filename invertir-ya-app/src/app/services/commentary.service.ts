import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Commentary } from '../model/commentary.model';

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {

  private url: string = `${environment.api}/commentaries`;

  constructor(
    private http: HttpClient
  ) { }

  save(data: any)
  {
    return this.http.post<Commentary>(`${this.url}`, data);
  }

  delete(id: number)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
}
