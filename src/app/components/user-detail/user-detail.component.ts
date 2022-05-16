import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { User } from 'src/app/models/user.model';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;
  submitted: Item[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { username } = this.route.snapshot.params;
    this.apiService.getUser(username).subscribe((user) => {
      this.user = user;
    });
  }
}
