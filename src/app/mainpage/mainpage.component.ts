import { Component, Input, Optional} from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsService } from "../Services/user-details.service";
import {TransferComponent} from "../pop-up/transfer/transfer.component"
import { UserValidationService } from "../Services/user.validation.service";

@Component({
    selector: "main-page",
    templateUrl: './mainpage.component.html',
    styleUrls: ['./mainpage.component.css']
})

export class MainPageComponent{
    @Input() Name: string | undefined;
    @Input() AccountNumber: number | undefined;
    IfscCode = "PYNOW123456";
    BranchName = "Hyderabad";
    showAccountNumber = false;
    showAccountBalance = false;
    showCreditDetails = false;
    transferClicked=false;
    showMiniDebitTransactions = false;
    totalBalance=0
    miniDebitTransaction: any[]=[];
    newminiDebitTrans: any[]=[];

    constructor(public userDetails: UserDetailsService,@Optional() private matDialog: MatDialog, public UserValidation: UserValidationService){}

    openModal() {
        this.transferClicked = false;
        const dialogRef = this.matDialog.open(TransferComponent,{ 
        "width": '600px',
        "maxHeight": '5000px',
        //'': true
        });
    }
    getTotalBalance(){
        this.totalBalance=this.userDetails.totalBalance;
    }
    miniDebitTrans(newList: any[]){
        this.newminiDebitTrans = newList.slice(0);
        if(this.newminiDebitTrans.length>2 && this.miniDebitTransaction.length == 0){
            console.log(this.miniDebitTransaction.length);
            for(let i=0;i<2;i++){
                this.miniDebitTransaction.push(this.newminiDebitTrans.pop());
            } 
        }
        else if(this.miniDebitTransaction.length == 0){
            this.miniDebitTransaction = this.newminiDebitTrans;
        }
    }
    showAccNODetails(): void{
        this.showAccountNumber=!this.showAccountNumber;
    }
    showAccBalDetails(): void{
        this.showAccountBalance = !this.showAccountBalance;
    }
    showCreditAmountDetails(){
        this.showCreditDetails = !this.showCreditDetails;
        // this.creditTransCloseButton=!this.creditTransCloseButton;
    }
    showDebitAmountDetails(){
        this.showCreditDetails = !this.showCreditDetails;
    }
    showDebitMiniTransactions(){
        this.showMiniDebitTransactions = !this.showMiniDebitTransactions;
    }
}