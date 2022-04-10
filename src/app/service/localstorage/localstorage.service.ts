import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {


  getItem(key: string) {
    return localStorage.getItem(key) ? JSON.parse( localStorage.getItem(key)) : [];
  }

  setItem(key: string, value: string | any) {

    if (typeof value === "string") {
      localStorage.setItem(key, value);
      return this.getItem(key);
    }

    localStorage.setItem(key, JSON.stringify(value));
    return this.getItem(key);
  }

  deleteItem(key: string) {
    localStorage.removeItem(key);
  }
}
