import { Component, OnInit } from '@angular/core';
import { item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  public items: item[] = [];
  Itemservice: any

  constructor(private_Itemservice:ItemService) {
    this.Itemservice.getitem().subscribe(
      (data:any)=>{
        this.items=data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
  }

  ngOnInit(): void {}
}
