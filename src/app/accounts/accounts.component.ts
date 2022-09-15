import { Component, OnInit } from '@angular/core';
import { Accounts } from '../accounts';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  public Accounts: Accounts[] = [];
  Accountsservice: any;

  constructor(private _Accountservice: AccountsService) {
    this._Accountservice.getaccounts().subscribe(
      (data: any) => {
        this.Accounts = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  ngOnInit(): void {}
}
