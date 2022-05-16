import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@models/item.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() id!: number;
  item: Item | undefined;

  kidsPluralMapping = {
    '=0': 'discuss',
    '=1': '1 comment',
    other: '# comments',
  };

  pointsPluralMapping = {
    '=0': '0 points',
    '=1': '1 point',
    other: '# points',
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItem(this.id).subscribe((item) => {
      this.item = item;
    });
  }
}
