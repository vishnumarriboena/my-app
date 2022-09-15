import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public admins:Admin[]=[];

  constructor(private _adminservice:AdminService) {
    this._adminservice.getadmins().subscribe(
          (data:any) =>{
           this.admins=data;
           },
           (err:any)=>{
           alert('internal server error');
           }
    )
   }

  ngOnInit(): void {
  }

}
