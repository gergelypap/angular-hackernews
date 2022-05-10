import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  public items: number[] = [];
  public chunkSize: number = 50;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ list }) => {
      this.getItems(list);
    });
  }

  getFeed(list: string): Observable<any> {
    switch (list) {
      case 'top':
        return this.apiService.getTopStories();
      case 'latest':
        return this.apiService.getNewStories();
      case 'best':
        return this.apiService.getBestStories();
    }
    throw new Error(`Unknown list type ${list}`);
  }

  getItems(list: string): void {
    this.getFeed(list).subscribe((items) => {
      this.items = items.slice(0, this.chunkSize);
    });
  }
}
