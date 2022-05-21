import { Component } from '@angular/core';

interface Link {
  path: string;
  text: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  links: Link[] = [
    { path: '/top', text: 'top' },
    { path: '/latest', text: 'latest' },
    { path: '/best', text: 'best' },
  ];
}
