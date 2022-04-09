import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-control-client',
  templateUrl: './form-control-client.component.html',
  styleUrls: ['./form-control-client.component.css']
})
export class FormControlClientComponent implements OnInit {
  clientTitle = "Create Client"
  constructor() { }

  ngOnInit(): void {
  }

}
