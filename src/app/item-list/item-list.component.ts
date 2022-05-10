import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  public items: number[] = [];
  public chunkSize: number = 50;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.apiService.getTopStories().subscribe((items) => {
      this.items = items.slice(0, this.chunkSize);
    });
  }
}
