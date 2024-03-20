import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {
  num = 0;
  UserName = '';
  AccountNo: number | undefined;
  Password = '';
  IsSuccessful: boolean | undefined;
  cred_check = false;
  constructor(private router: Router) { }
  userDetails = [{userName:"Hemanth", AccountNo:427,Password:"12345"},
                {userName:"Ahish", AccountNo:123,Password:"123456"}]
  validateUser(_UserName: string, _AccountNo: number, _Password: string){
    for (let user of this.userDetails) {
      if((_UserName == user.userName) && (_AccountNo == user.AccountNo) && (_Password==user.Password)){
          this.IsSuccessful = true;
          this.cred_check = false;
          // this.index=this.userDetails.indexOf({userName:this.currentUser, AccountNo:this.Accountno,Password:this.password})
          //console.log({userName:this.currentUser, AccountNo:this.Accountno,Password:this.password});
          //console.log(this.index);
          //routerLink="/mainPage"
          this.UserName = _UserName;
          this.AccountNo = _AccountNo;
          this.Password = _Password;
          this.router.navigate(['/mainPage']);
      }
      else if((_UserName != user.userName) || (_AccountNo != user.AccountNo) || (_Password!=user.Password)){
          this.num+=1;
          if(this.num == this.userDetails.length){
              this.IsSuccessful=false;
              this.cred_check=true;
              this.num=0;
          }
        console.log(this.cred_check);
      }
    }
  }
}
