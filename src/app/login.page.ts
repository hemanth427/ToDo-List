import { Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { Router } from "@angular/router";
import { UserValidationService } from "./Services/user.validation.service";
//import * as userDetails from '../assets/details.json';

@Component({
    selector: "todo-list",
    templateUrl: './login.page.html',
    styleUrls: ["./login.page.css"]
})

export class TodoListComponent implements OnInit{

    constructor(private router: Router, private userValidation: UserValidationService){

    }
    PageTitle = "Payments App";
    currentUser = '';
    Accountno: any;
    password = '';
    isSuccessful = false;
    credentials_check = false;
    

    validateUser(){
        this.userValidation.validateUser(this.currentUser,this.Accountno,this.password);
        this.credentials_check = this.userValidation.cred_check;
    }
    ngOnInit(){

    }
    /*
    userDetails = [{userName:"Hemanth", AccountNo:427,Password:"1"},
                    {userName:"Ahish", AccountNo:123,Password:"1"}]
    
    validateUser(){
        for (let user of this.userValidation.userDetails) {
            if((this.currentUser == user.userName) && (this.Accountno == user.AccountNo) && (this.password==user.Password)){
                this.isSuccessful = true;
                this.cred_check = false;
                // this.index=this.userDetails.indexOf({userName:this.currentUser, AccountNo:this.Accountno,Password:this.password})
                //console.log({userName:this.currentUser, AccountNo:this.Accountno,Password:this.password});
                //console.log(this.index);
                //routerLink="/mainPage"
                this.router.navigate(['/mainPage']);
            }
            else if((this.currentUser != user.userName) || (this.Accountno != user.AccountNo) || (this.password!=user.Password)){
                this.num+=1;
                //console.log(this.num);
                if(this.num == this.userValidation.userDetails.length){
                    this.isSuccessful=false;
                    this.cred_check=true;
                    this.num=0;
                }
                this.router.navigate(['/']);
            }
        }
    } 
    */
    
}



