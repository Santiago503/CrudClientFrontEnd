import { AfterViewChecked, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputGeneric } from 'src/app/component/control-input-generic/model/InputGeneric';
import { EmailValidator, NameValidator } from 'src/app/helper/validate';
import { AlertService } from 'src/app/service/alert/alert.service';
import { DialogService } from 'src/app/service/dialog/dialog.service';
import { HttpRequestService } from 'src/app/service/httpRequest/http-request.service';
import { inputGenericDataClient } from './InputGenerer/InputforGenererClient';
import { inputGenericDataClientAddress } from './InputGenerer/InputforGenererClientAddress';
@Component({
  selector: 'app-form-control-client',
  templateUrl: './form-control-client.component.html',
  styleUrls: ['./form-control-client.component.css']
})
export class FormControlClientComponent implements OnInit, AfterViewChecked {


  clientTitle = "Create Client1"
  inputGenericData: InputGeneric[] = inputGenericDataClient;
  inputGenericDataClientAddress: InputGeneric[] = inputGenericDataClientAddress;
  listGender = [{name: 'Male', id: 'M' }, {name: 'Female', id: 'F' }];
  listStatus = [{name: 'Active', id: 'A' }, {name: 'Inactive', id: 'I' }];

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public matDialogData: any,
              private dialog: DialogService,
              private alert: AlertService,
              private reqServ: HttpRequestService,private readonly changeDetectorRef: ChangeDetectorRef) {

                // matDialogData?.data ? this.FormBuilder.patchValue( matDialogData?.data ) : null;
                // matDialogData?.formEnableOrdisable ? this.FormBuilder.enable() : this.FormBuilder.disable();

              }

  ngOnInit() {
    this.setDataInputs()
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  setDataInputs() {
    this.inputGenericData[4].data = this.listGender;
    this.inputGenericData[6].data = this.listStatus;
  }

  FormBuilder  = this.fb.group({
    id                  :[0]
    ,name               :['', [Validators.required, Validators.maxLength(50), NameValidator]]
    ,lastname           :['', [Validators.required, Validators.maxLength(50), NameValidator]]
    ,gender             :['', Validators.required]
    ,email              :['', [Validators.required, EmailValidator]]
    ,statusId           :['M',  Validators.required]
    ,telefono           :['']
    ,address            :this.fb.array([this.createAddress()])
  });

  createAddress(address:any = null) {
    return this.fb.group({
       clientId           :['']
      ,country            :['']
      ,city               :['']
      ,address            :['']
    });
  }

  get getAddres() {
    return this.FormBuilder.get("address") as FormArray;
  }

  addItem(address:any): void {
    this.getAddres.push(this.createAddress(address));
  }

  validateForm(): boolean{
    return true;
  }

  save() {
    console.log(this.FormBuilder.value)
    var valid = this.validateForm();
    if(!valid) { return; }

    return;

    let req = this.FormBuilder.value.id == 0
              ? this.reqServ.postRequest('', this.FormBuilder.value)
              : this.reqServ.putRequest('', this.FormBuilder.value);

     req
    .subscribe(
      resp => {
        // this.alert.toartSuccess('','Transaccion Guardada Correctamente');
        this.dialog.dialogClose();
      },
      error => {
        // this.alert.toartError('','Ocurrio un error, ' + error.error);
        console.log
      });
  }
}
