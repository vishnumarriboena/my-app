import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private _HttpClient:HttpClient) {}

  getmails(){
    return this._HttpClient.get(
      "https://jsonplaceholder.typicode.com/todos");
  }
}
