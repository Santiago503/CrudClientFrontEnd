import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { EmailValidator, NameValidator } from 'src/app/helper/validate';
import { LocalstorageService } from 'src/app/service/localstorage/localstorage.service';
import { ClientAddressI, ClientI } from '../model/clientInterface';
import { uid } from 'uid';
import { HttpRequestService } from './../../../service/httpRequest/http-request.service';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public keyClient = "DataClient";
  public ListClient = [];
  public typeStorage: 'LocalStorage' | 'API' = 'API';
  FormBuilder :FormGroup;

  constructor( private fb: FormBuilder,
               private reqServ: HttpRequestService,
               private localStorageServ: LocalstorageService) { }

  //true = LocalStorage, false = API Rest
 get getTypeStorage() {
    if(this.typeStorage == 'LocalStorage') {
      return true;
    }
    return false;
  }

  //#region FORMCONTROL
  createFormBuilder() {
    this.FormBuilder = this.fb.group({
      id                  :[0]
      ,name               :['', [Validators.required, Validators.maxLength(50), NameValidator]]
      ,lastname           :['', [Validators.required, Validators.maxLength(50), NameValidator]]
      ,gender             :['', Validators.required]
      ,email              :['', [Validators.required, EmailValidator]]
      ,status             :['A',  Validators.required]
      ,cellphone           :['']
      ,localStorageOrApi  :[true]
      ,clientAddress            :this.fb.array([this.createAddress()])
    });
  }

  get getAddres() {
    return this.FormBuilder.get("clientAddress") as FormArray;
  }

  get Clients() {
    return this.localStorageServ.getItem(this.keyClient);
  }

  createAddress(address:ClientAddressI = null) {
    return this.fb.group({
       clientId           :[address?.clientId || 0]
      ,country            :[address?.country ||'',  Validators.required]
      ,city               :[address?.city ||'',  Validators.required]
      ,address            :[address?.address ||'',  Validators.required]
    });
  }
  //#endregion

  //#region LOCALSTORAGE
  saveClientLocalStorage( data: ClientI) {
    //if id is not null then update
    if(data.id != '' && data.id != 0 && data.id != null && data.id != undefined) {
      this.updateClientLocalStorage(data);
      return true;
    }


    //else create
    data.id = uid(6);//create Id
    data?.clientAddress?.forEach( x => {
      x.clientId = data.id; //id for addres FOREIGN KEY
    })
    let Client = [];
    if(this.localStorageServ.getItem(this.keyClient) === null) {
      //new client, if there aren't data is new client
      Client = [];
      Client.push(data);
      this.localStorageServ.setItem(this.keyClient, Client)
      return true;
    }

    //no new
    Client = this.localStorageServ.getItem(this.keyClient);
    Client.push(data);
    this.localStorageServ.setItem(this.keyClient, Client);
    return true;
  }

  updateClientLocalStorage(ClientUpdatedata: ClientI) {
    let Client = this.localStorageServ.getItem(this.keyClient) as ClientI[];
    for (let i = 0; i < Client.length; i++) {

          if (ClientUpdatedata.id == Client[i].id) {
            Client.splice(i, 1);
            Client.push(ClientUpdatedata);
            Client[i].clientAddress.forEach( x => {
              x.clientId  = Client[i].id;
            });
            this.localStorageServ.setItem(this.keyClient, Client);
            break;
          }
        }
  }

  deleteClientLocalStorage(Clientdata: ClientI) {
    let Client = this.localStorageServ.getItem(this.keyClient) as ClientI[];
    for (let i = 0; i < Client.length; i++) {
      if (Clientdata.id == Client[i].id) {
        Client.splice(i, 1);
        this.localStorageServ.setItem(this.keyClient, Client);
        break;
      }
    }
  }
  //#endregion

  //#region API REST
  getApiClient() {
    return this.reqServ.getRequest('client');
  }

  deleteApiClient(id: number) {
    return this.reqServ.deleteRequest('client/'+id);
  }

  //#endregion

}
