import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {

  public name: string = '';
  public Age: number = 0;
  public company: string = '';
  public package: number = 0;
  employees: any=[];
  employee: any=[];
  

  
  constructor() {}

  ngOnInit(): void {

  }
  register(){
    this.employees.push({
      'name':this.name,
      'age':this.Age,
      'company':this.company,
      'package':this.package,
    });
  }
    clear(){
      this.employees=[];
    }
    delete(i: number){
      this.employees.splice(i ,1);
    }
  
    packagelowToHigh(){
  this.employees=this.employees.sort((a:any,b:any)=>a.package-b.package);
  }
  packageHighTolow(){
    this.employees=this.employees.sort((a:any,b:any) => b.package - a.package);
  }

}
    

