import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css'],
})
export class DatabindComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public age: number = 22;
  public name: string = 'vishnu';
  public isIndian: Boolean = true;

  public phones: number[] = [9581, 2327, 24];

  public courses: string[] = ['Angular', 'React'];

  public user: User = { name: 'vishnu', city: 'texas' };

  public student: Student = {
    name: 'vishnu',
    id: 'n123',
    marks: 99,
  };
}
