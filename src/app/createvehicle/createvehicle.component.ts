import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css'],
})
export class CreatevehicleComponent implements OnInit {
  public vehicleForm: FormGroup = new FormGroup(   
  {
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
  });
  _vehicleservice: any;

  constructor() {}

  ngOnInit(): void {
  }

  submit(){
    console.log( this.vehicleForm.value);

    this._vehicleservice.createVehicle(this.vehicleForm.value).subscrib(

    (data:any)=>{
      alert("created succesfully!!!");
    },
    (err:any)=>{
      alert("Internal server error");
    }
    )
    }




  }
  


function subscrib(arg0: (data: any) => void, arg1: (err: any) => void) {
  throw new Error('Function not implemented.');
}
 
