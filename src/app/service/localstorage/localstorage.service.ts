import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {


  getItem(key: string) {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }

  setItem(key: string, value: string | any) {

    if (typeof value === "string") {
      let newValue = { value }
      localStorage.setItem(key, JSON.stringify(newValue));
      return this.getItem(key);
    }

    localStorage.setItem(key, JSON.stringify(value));
    return this.getItem(key);
  }

  deleteItem(key: string) {
    localStorage.removeItem(key);
  }
}
