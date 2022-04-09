import { Component, OnInit } from '@angular/core';
import { DialogService } from './../../service/dialog/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialogServ: DialogService) { }

  ngOnInit(): void {
  }

  create(event: any) {
  }

}
