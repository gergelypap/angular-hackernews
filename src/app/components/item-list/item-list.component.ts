import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  @Input() ids: number[] = [];
  @Input() chunkSize: number = 30;
  chunks: number = 0;
  items: number[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { list } = this.route.snapshot.data;
    if (list) {
      this.getFeed(list).subscribe((ids) => {
        this.ids = ids;
        this.getItems();
      });
      return;
    }

    if (this.ids.length) {
      this.getItems();
    }
  }

  getItems() {
    this.items = [
      ...this.items,
      ...this.ids.slice(
        this.chunks * this.chunkSize,
        this.chunks * this.chunkSize + this.chunkSize
      ),
    ];
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
    this.chunks++;
    this.getItems();
  }
}
