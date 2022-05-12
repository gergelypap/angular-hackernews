import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '@models/comment.model';
import { Item } from '@models/item.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  item: Item | undefined;
  comments: Comment[] | undefined;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.apiService.getItem(id).subscribe((item) => {
      this.item = item;
    });
  }

  getComments() {
    this.item?.kids?.map((id) =>
      this.apiService.getItem(id).subscribe((comment) => console.log(comment))
    );
  }
}
