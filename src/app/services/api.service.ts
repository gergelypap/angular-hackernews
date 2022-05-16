import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = 'https://hacker-news.firebaseio.com/v0/';

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

  getUser(name: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${name}.json`);
  }
}
