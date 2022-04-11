import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AlertService } from 'src/app/service/alert/alert.service';
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
  @Output() getClient = new EventEmitter<boolean>();
  constructor( public clientServ: ClientService, private dialogServ: DialogService, private alert: AlertService) {
  }

  ngOnInit(): void {
    this.getListClient();
  }


  getListClient() {
    this.getClient.emit(true);
  }


  applyFilter(event) {
    console.log("~ event", event)
  }

  onDelete(data: ClientI) {
    if(this.clientServ.getTypeStorage) {
      this.clientServ.deleteClientLocalStorage(data);
      this.getListClient();
    }else{
      this.clientServ
      .deleteApiClient(data.id)
      .subscribe(
        resp => {
          this.alert.swalBasic('Good Job!','Deleted Successfully','success');
        });
    }

  }

  onUpdate(data: any) {
    let dg = this.dialogServ.onCreateDialog(FormControlClientComponent, '100', '60', data.canEditOrSee, data, false, true, '900px', 'right');

    dg.afterClosed().subscribe((resp) => {
       this.getListClient();
    });

  }

}
