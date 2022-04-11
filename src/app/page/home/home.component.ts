import { Component, OnInit } from '@angular/core';
import { DialogService } from './../../service/dialog/dialog.service';
import { FormControlClientComponent } from './../client/form-control-client/form-control-client.component';
import { ClientService } from './../client/service/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialogServ: DialogService, private clientServ: ClientService) { }

  ngOnInit(): void {
  }

  create(event: any) {
      this.dialogServ.onCreateDialog(FormControlClientComponent, '100', '60', true, null, false, true, '900px', 'right');
  }


  Client() {
    this.clientServ.loading = true;


    if(this.clientServ.getTypeStorage) {
      this.clientServ.ListClient = this.clientServ.Clients;
      this.clientServ.loading = false;
    }
    else {
      this.clientServ
      .getApiClient()
      .subscribe(
        resp => {
          this.clientServ.loading = false;
          this.clientServ.ListClient = resp;
        },
        error => {
          this.clientServ.loading = false;
          this.clientServ.ListClient = [];
        });

    }
  }

}
