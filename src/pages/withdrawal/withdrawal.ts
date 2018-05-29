import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { AtmResponseOperation,AtmResponseOperationBalance } from '../../models/atm.interface';

@IonicPage()
@Component({
  selector: 'page-withdrawal',
  templateUrl: 'withdrawal.html',
})
export class WithdrawalPage implements OnInit{

  public withdrawalForm : FormGroup;
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

    this.withdrawalForm = new FormGroup({
          amount : new FormControl(0,Validators.required)
    });
     
  }

  ionViewWillEnter() { 
    this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(resp => {
      this.currentBalance = resp.currentBalance;
      this.atmService.accountName = resp.accountName;
    });
  }

  doWithdrawal(theForm:FormGroup) {

    this.amount =  theForm.value.amount;
    if(this.amount < this.currentBalance){
      this.makeAWithdraw(this.atmService.getAccountNumber(),this.amount);
      this.alertCtrl.create({
        title: "Success",
        subTitle: "Withdrawal Successful",
        buttons: [{ text : 'Ok' , handler : data => {this.navCtrl.pop()} }]
      }).present();  
    }else{
      this.alertCtrl.create({
        title: "Error",
        subTitle: "Insufficient Balance",
        buttons: ['Ok']
      }).present();
    }

  }

  makeAWithdraw(acct:string,amount:number) {

    this.atmService.withDraw(acct,amount).then( result => {
            this.atmResponse = result;
            this.currentBalance = result.currentBalance;

  });  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawalPage');
  }

}
