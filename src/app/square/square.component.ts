import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  length: any;
  result: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  area(){
    this. result = this.length *this.length;
  }

  perimeter(){
    this.result = this.length*4;
  }

}
