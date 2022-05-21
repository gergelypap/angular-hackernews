import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() id!: number;
  item$!: Observable<Item>;

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
    this.item$ = this.apiService.getItem(this.id);
  }
}
