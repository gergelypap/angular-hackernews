import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  public items: number[] = [];
  public chunkSize: number = 30;
  public loadedChunks: number = 0;
  public feed: Observable<number[]> | undefined;
  public loading: boolean = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ list }) => {
      this.feed = this.getFeed(list);
      this.getItems();
    });
  }

  getItems(): void {
    this.loading = true;
    this.feed?.subscribe((items) => {
      this.items = this.items.concat(
        items.slice(
          this.loadedChunks * this.chunkSize,
          this.loadedChunks * this.chunkSize + this.chunkSize
        )
      );
      this.loading = false;
    });
  }

  getFeed(list: string): Observable<number[]> {
    switch (list) {
      case 'top':
        return this.apiService.getTopStories();
      case 'latest':
        return this.apiService.getNewStories();
      case 'best':
        return this.apiService.getBestStories();
      default:
        throw new Error(`Unknown list type ${list}`);
    }
  }

  loadMore() {
    this.loadedChunks++;
    this.getItems();
  }
}
