import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

interface Link {
  path: string;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  links: Link[] = [
    { path: '/top', text: 'top' },
    { path: '/latest', text: 'latest' },
    { path: '/best', text: 'best' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
