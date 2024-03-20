import { Component, EventEmitter, Output } from '@angular/core';
import { UserDetailsService } from 'src/app/Services/user-details.service';


@Component({
  selector: 'app-debit-transactions',
  templateUrl: './debit.transactions.component.html',
  styleUrls: ['./debit.transactions.component.css']
})
export class DebitTransactionsComponent{
  showDebitDetails=true;
  debitTransactions: any[]=[];
  @Output() debitTrans = new EventEmitter<any[]>();

  constructor(public debitTransaction: UserDetailsService){
  }
  
  ngOnInit(){
    this.debitTransactions = this.debitTransaction.getDebitTransactionData();
    console.log(this.debitTransactions);
  }
  emitDebitTransactions(values: any[]){
    this.debitTrans.emit(values);
  }

  showDebitAmountDetails(){
  this.showDebitDetails=!this.showDebitDetails;
  }
}
