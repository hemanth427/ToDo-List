import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './login.page';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from '../app/mainpage/mainpage.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CreditTransactionsComponent } from './pop-up/credit.transactions/credit.transactions.component';
import { DebitTransactionsComponent } from './pop-up/debit.transactions/debit.transactions.component';
import { TransferComponent } from './pop-up/transfer/transfer.component';
import { UserDetailsService } from './Services/user-details.service';
import { UserValidationService } from './Services/user.validation.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    MainPageComponent,
    PopUpComponent,
    CreditTransactionsComponent,
    DebitTransactionsComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path:"",component:TodoListComponent},
      {path: "mainPage",component: MainPageComponent},
      {path:"creditTrans", component:CreditTransactionsComponent},
      { path: '',   redirectTo: '/', pathMatch: 'full' }
      //{path:"debitTrans",component:DebitTransactionsComponent} 
    ])
  ],
  providers: [
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    { 
      provide: MatDialogRef, 
      useValue: {} 
    },
    UserDetailsService,
    UserValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
