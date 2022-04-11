import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/service/localstorage/localstorage.service';
import { ClientService } from './../../page/client/service/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() getClient = new EventEmitter<boolean>();

  constructor(private router: Router,
              public ClientServ: ClientService,
              public localStoServ: LocalstorageService) { }

  ngOnInit(): void {
    let value = this.localStoServ.getItem('typeStorage');
    if(value) {
      this.setChangeValueTypeStorage(value.value)
    }
  }

  getListClient() {
    this.getClient.emit(true);
  }

  getChange(event) {
    this.saveInLocalStorage(event?.value);
    this.getListClient();
  }

  setChangeValueTypeStorage(value : 'LocalStorage' | 'API') {
    this.ClientServ.typeStorage =  value;
  }

  saveInLocalStorage(value : 'LocalStorage' | 'API') {
    this.localStoServ.setItem('typeStorage', value);
  }

  goTO() {
    window.open( 'https://www.linkedin.com/in/santiago-encarnacion-smith-8260bb118/', '_blank');
  }
}
