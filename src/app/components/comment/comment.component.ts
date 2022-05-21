import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() commentId!: number;
  comment$!: Observable<Comment>;
  collapsed: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.comment$ = this.apiService.getItem(this.commentId);
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
