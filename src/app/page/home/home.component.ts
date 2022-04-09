import { Component, OnInit } from '@angular/core';
import { DialogService } from './../../service/dialog/dialog.service';
import { FormControlClientComponent } from './../client/form-control-client/form-control-client.component';

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
      this.dialogServ.onCreateDialog(FormControlClientComponent, '100', '50', true, null, false, true, '900px', 'right');
  }

}
