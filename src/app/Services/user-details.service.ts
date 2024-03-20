import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService{
  emit(values: unknown) {
    throw new Error('Method not implemented.');
  }
  constructor(){}
  totalBalance = 0;
  debitTransList: any[]=[];
  creditTransList: any[]=[];
  isDebitAmtGreater = false;

  userDebitTransactionsList(_SNo: number,_DebitAmount: number,_accountBalance: number){
      if(this.totalBalance>=_DebitAmount){
        this.totalBalance-=_DebitAmount;
        this.debitTransList.push({SNo: _SNo, DebitAmount: _DebitAmount, TotalAmount: this.totalBalance});
        this.isDebitAmtGreater = false;
      }
      else{
        this.isDebitAmtGreater = true;
      }
    }
  userCreditTransactionList(_SNo: number,_CebitAmount: number,_accountBalance: number){
    this.totalBalance+=_CebitAmount;
    this.creditTransList.push({SNo: _SNo, DebitAmount: _CebitAmount, TotalAmount: this.totalBalance});
  }

  getDebitTransactionData(){
    console.log(this.debitTransList);
    return this.debitTransList;
  }

  getCreditTransactionData(){
    return this.creditTransList;
  }
}
