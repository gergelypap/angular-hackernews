import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() commentId!: number;
  comment: Comment | undefined;
  collapsed: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getItem(this.commentId)
      .subscribe((comment) => (this.comment = comment));
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
