import { Component } from '@angular/core';
import { UserDetailsService } from 'src/app/Services/user-details.service';

@Component({
  selector: 'app-credit.transactions',
  templateUrl: './credit.transactions.component.html',
  styleUrls: ['./credit.transactions.component.css']
})
export class CreditTransactionsComponent{
  creditTransactions: any[]=[];

  constructor(public creditTransaction: UserDetailsService){}
  ngOnInit(){
    this.creditTransactions = this.creditTransaction.getCreditTransactionData();
  }
}
