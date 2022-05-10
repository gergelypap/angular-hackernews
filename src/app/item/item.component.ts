import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() id: number | undefined;
  item: Item | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItem(this.id as number).subscribe((item) => {
      this.item = item;
    });
  }
}
