import { Component, OnInit } from '@angular/core';
import { vehicle } from '../vehical';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public filterTerm:string="";

  public column:string="";
  public order:string="";

  public vehicles:vehicle[]=[];

  constructor( private _vehicleService: VehicleService) {
      this._vehicleService.getvehicles().subscribe(
            (data:any)=>{
              this.vehicles = data;
            },
            (err:any) => {
              alert('internal server error');
            }
      )
    
   }

  ngOnInit(): void {
  }

  filter(){
  this._vehicleService.getFilteredvehicles(this.filterTerm).subscribe(
      (data:any)=>{
              this.vehicles = data;
            },
            (err:any) => {
              alert('internal server error');
            }
      )
   }
   sort(){
    this._vehicleService.getsortedvehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error ");
      }
    )
   }
page(pageNo:number){
  this._vehicleService.getPagevehicles(pageNo).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

delete(id:string){
  this._vehicleService.deletevehicle(id).subscribe(
    (data:any)=>{
      alert("Deleted successfully !!!!");
      location.reload();
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}
}