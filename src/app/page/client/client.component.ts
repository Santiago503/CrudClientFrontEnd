import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/service/dialog/dialog.service';
import { FormControlClientComponent } from './form-control-client/form-control-client.component';
import { ClientI } from './model/clientInterface';
import { ClientService } from './service/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  column = ['nro.', 'id', 'name', 'lastname', 'cellphone','status','acciones'];
  searchKey = '';
  loading = false;
  constructor( public clientServ: ClientService, private dialogServ: DialogService) {

  }

  ngOnInit(): void {
    this.Client();
  }

  Client() {
    if(this.clientServ.getTypeStorage)
      this.clientServ.ListClient = this.clientServ.Clients;
    else{
      this.clientServ
      .getApiClient()
      .subscribe(
        resp => {
          this.clientServ.ListClient = resp;
        });
    }
  }

  applyFilter(event) {
    console.log("~ event", event)
  }

  onDelete(data: ClientI) {
    this.clientServ.deleteClientLocalStorage(data);
    this.Client();
  }

  onUpdate(data: any) {
    this.dialogServ.onCreateDialog(FormControlClientComponent, '100', '60', data.canEditOrSee, data, false, true, '900px', 'right');
  }

}
