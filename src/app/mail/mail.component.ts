import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
 public Mails:Mail[]=[];

  constructor(private _mailservice:MailService) {
    this._mailservice.getmails().subscribe(
          (data:any)=>{
            this.Mails=data;
          },
          (err:any)=>{
            alert('internal server error');
          }
    )
   }

  ngOnInit(): void {
  }

}
