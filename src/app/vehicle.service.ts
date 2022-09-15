import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { vehicle } from './vehical';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {


  constructor(private _httpClient:HttpClient){

  }

  getvehicles(){
    return this._httpClient.get<vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'
      );
  }
getFilteredvehicles(filtermTerm:string):Observable<vehicle[]>{
  return this._httpClient.get<vehicle[]>(
    'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?filter='+filtermTerm
  );
}
getPagevehicles(pageNo:Number):Observable<vehicle[]>{
  return this._httpClient.get<vehicle[]>(
    'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?limit=10&page='+pageNo
  );
}
getsortedvehicles(column:string,order:string):Observable<vehicle[]>{
  return this._httpClient.get<vehicle[]>(
    'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?sortBy='+column+'&order'+order
  );
}

  createVehicle(vehicle:vehicle):Observable<vehicle>{

    return this._httpClient.post<vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',vehicle
    );

    
  }

  deletevehicle(id:string):Observable<vehicle>{
    return this._httpClient.delete<vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+"/"+id
    );
  }
}
