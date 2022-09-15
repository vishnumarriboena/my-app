import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _HttpClient:HttpClient) { }

  getadmins(){
    return this._HttpClient.get(
     'https://jsonplaceholder.typicode.com/users' );
  }


}
