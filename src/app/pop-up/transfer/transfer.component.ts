import { Component, EventEmitter, Inject, Input, Optional, Output } from '@angular/core';
import { UserDetailsService } from 'src/app/Services/user-details.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  showCreditDetails=true;
  sendInputBox = false;
  receiveInputBox = false;
  debitAmount: any;
  creditAmount: any;
  transferSendCloseButton=true;
  transferReceiveCloseButton = true;
  isCredit = false;
  isDebit = false;
  @Input() UserName: string | undefined;
  @Output() newBalance = new EventEmitter<number>();

  constructor(public userTransactions: UserDetailsService,public dialogRef: MatDialogRef<TransferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(){

  }
  sendAccountBalance(value: number) {
    this.newBalance.emit(value);
  }

  showCreditAmountDetails(){
  this.showCreditDetails=!this.showCreditDetails;
}
  showSendInputBox(){
    this.sendInputBox = true;
    this.receiveInputBox = false;
    this.transferSendCloseButton=true;
    this.isDebit = true;
  }
	
allowNumericDigitsOnlyOnKeyUp(e: { which: any; keyCode: any; }) {		
  const charCode = e.which ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    alert("Only Numeric values are allowed");
    //this.debitAmount = null;
  }
}

  showReceiveInputBox(){
    this.receiveInputBox = true;
    this.sendInputBox = false;
    this.transferReceiveCloseButton = true;
    this.isCredit = true;
  }

  

  addDebitRecord() {
    // for(let i=1;i<2;i++){
    //   this.debitTransactions.push({SNo: i, DebitAmount: this.debitAmount, totalAmount: this.debitAmount})
    //   //console.log(this.debitAmount);
    // }
    // console.log(this.debitTransactions);
    this.userTransactions.userDebitTransactionsList(1,this.debitAmount,this.debitAmount);
    this.debitAmount = null;
    if(this.userTransactions.isDebitAmtGreater){
      alert("Debit amount cannot be greater than total balance");
    }
  }
  addCreditRecord(){
    this.userTransactions.userCreditTransactionList(1,this.creditAmount,this.creditAmount);
    this.creditAmount = null;
  }
  transferSendClose(){
    this.transferSendCloseButton = !this.transferSendCloseButton;
  }
  transferReceiveClose(){
    this.transferReceiveCloseButton = !this.transferReceiveCloseButton;
  }
  onNoClick(): void {
    this.dialogRef.close();
}
}




