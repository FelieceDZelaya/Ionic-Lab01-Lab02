import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { AtmResponseOperation,AtmResponseOperationBalance } from '../../models/atm.interface';

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage implements OnInit {

  public depositForm : FormGroup;
  accNum : string = '';
  amount : number;

  public currentBalance     : number = 0;
  public atmResponse        : AtmResponseOperation = <AtmResponseOperation>{}; 
  public atmResponseBalance : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public atmService : AtmserviceProvider,
              public alertCtrl: AlertController) {
    this.accNum = navParams.get("acc");
  }

  ngOnInit() {

    this.depositForm = new FormGroup({
          amount : new FormControl(0,Validators.required)
    });
     
  }

  ionViewWillEnter() { 
    this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(resp => {
      this.currentBalance = resp.currentBalance;
      this.atmService.accountName = resp.accountName;
    });
  }

  doDeposit(theForm:FormGroup) {

    this.amount =  theForm.value.amount;
    this.makeADeposit(this.atmService.getAccountNumber(),this.amount); 
    this.alertCtrl.create({
      title: "Success",
      subTitle: "Deposit Successful",
      buttons: [{ text : 'Ok' , handler : data => {this.navCtrl.pop()} }]
    }).present();  
  }


  makeADeposit(acct:string,amount:number) {
 
    this.atmService.deposit(acct,amount).then( result => {
               this.atmResponse = result;
               this.currentBalance = result.currentBalance;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }

}
