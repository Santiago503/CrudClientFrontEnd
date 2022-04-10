import { AfterViewChecked, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputGeneric } from 'src/app/component/control-input-generic/model/InputGeneric';
import { AlertService } from 'src/app/service/alert/alert.service';
import { DialogService } from 'src/app/service/dialog/dialog.service';
import { HttpRequestService } from 'src/app/service/httpRequest/http-request.service';
import { inputGenericDataClient } from './InputGenerer/InputforGenererClient';
import { inputGenericDataClientAddress } from './InputGenerer/InputforGenererClientAddress';
import { ClientService } from '../service/client.service';
import { ClientAddressI, ClientI } from '../model/clientInterface';

@Component({
  selector: 'app-form-control-client',
  templateUrl: './form-control-client.component.html',
  styleUrls: ['./form-control-client.component.css']
})
export class FormControlClientComponent implements OnInit, AfterViewChecked {
  clientTitle = "Create Client"
  inputGenericData: InputGeneric[] = inputGenericDataClient;
  inputGenericDataClientAddress: InputGeneric[] = inputGenericDataClientAddress;

  constructor(@Inject(MAT_DIALOG_DATA) public matDialogData: any,
              private dialogServ: DialogService,
              private alert: AlertService,
              public clientServ: ClientService,
              private readonly changeDetectorRef: ChangeDetectorRef) {

                this.clientServ.createFormBuilder();

                matDialogData?.data ? this.patchValue( matDialogData?.data ) : null;
                matDialogData?.formEnableOrdisable ? this.clientServ.FormBuilder.enable() : this.clientServ.FormBuilder.disable();

              }

  ngOnInit() {

    this.setDataInputs()
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  setDataInputs() {
    this.inputGenericData[4].data = [{name: 'Male', id: 'M' }, {name: 'Female', id: 'F' }];
    this.inputGenericData[6].data = [{name: 'Active', id: 'A' }, {name: 'Inactive', id: 'I' }];
    this.inputGenericData[7].data =  [{name: 'Local Storage', id: true }, {name: 'ASP NET CORE', id: false }];
  }


  patchValue(data :ClientI) {
    this.clientServ.FormBuilder.reset();
    this.clientServ.FormBuilder.patchValue( data );
    console.log("~ data", data)
    if(data?.address.length > 0)
      this.patchValueForAddress(data.address);
  }

  patchValueForAddress(data :ClientAddressI[]) {
    console.log("~ data", data)
    this.clientServ.getAddres.clear();

    data?.forEach((element: ClientAddressI) => {
      this.addItem(element);
    });
  }


  addItem(address:any) {
    this.clientServ.getAddres.push(this.clientServ.createAddress(address));
  }

  deleteItem() {
    if(this.clientServ.getAddres.length > 1){
      this.clientServ.getAddres.removeAt(this.clientServ.getAddres.length -1);
    }
  }

  validateForm(): boolean {
    this.clientServ.FormBuilder.markAllAsTouched();
    if(this.clientServ.FormBuilder.invalid) {
      this.alert.swalBasic('Algo Ocurrio Mal!', 'Error Formulario Invalido, todos los campos en rojos son requeridos','error');
      return false;
    }
    return true;
  }

  save() {
      var valid = this.validateForm();
      if(!valid) { return; }

      let data = this.clientServ.FormBuilder.value;

      this.clientServ.FormBuilder.value.localStorageOrApi == true
      ? this.saveLocalStorage(data)
      : this.saveApi(data);
  }

  saveLocalStorage(data: any) {
    let resp = this.clientServ.saveClientLocalStorage(data);

    if(resp) {
      this.alert.swalBasic('Good Job!','Saved Successfully','success');
      this.clientServ.ListClient = this.clientServ.Clients;
      this.dialogServ.dialogClose();
    }
  }

  saveApi(data: any) {
    // let req = this.clientServ.FormBuilder.value.id == 0
    //           ? this.reqServ.postRequest('', this.clientServ.FormBuilder.value)
    //           : this.reqServ.putRequest('', this.clientServ.FormBuilder.value);
    //  req
    // .subscribe(
    //   resp => {
    //     // this.alert.toartSuccess('','Transaccion Guardada Correctamente');
    //     this.dialog.dialogClose();
    //   },
    //   error => {
    //     // this.alert.toartError('','Ocurrio un error, ' + error.error);
    //     console.log
    //   });
  }
}

