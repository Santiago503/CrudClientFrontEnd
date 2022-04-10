import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTO() {
    window.open(
      'https://www.linkedin.com/in/santiago-encarnacion-smith-8260bb118/',
      '_blank'
    );
  }

}
