import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Article } from '../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url: string = `${environment.api}/articles`;

  constructor(
    private http: HttpClient
  ) { }

  findAll()
  {
    return this.http.get<any[]>(`${this.url}`);
  }

  delete(id: number)
  {
    return this.http.delete(`${this.url}/${id}`);
  }

  save(data: any)
  {
    return this.http.post(`${this.url}`, data);
  }
  update(data: any)
  {
    return this.http.put(`${this.url}`, data);
  }

  findById(id: number)
  {
    return this.http.get<Article>(`${this.url}/${id}`);
  }
}
