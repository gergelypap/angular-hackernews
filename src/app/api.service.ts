import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '@models/item.model';
import { Comment } from '@models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) {}

  getTopStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/topstories.json`);
  }

  getNewStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/newstories.json`);
  }

  getBestStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/beststories.json`);
  }

  getItem(id: number): Observable<any> {
    return this.http.get<Item>(`${this.baseUrl}/item/${id}.json`);
  }
}
