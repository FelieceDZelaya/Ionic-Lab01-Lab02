import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
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
  amount : number = 0;

  public currentBalance     : number = 0;
  public atmResponse        : AtmResponseOperation = <AtmResponseOperation>{}; 
  public atmResponseBalance : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public atmService : AtmserviceProvider,
    public toastCtrl: ToastController) {
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
      this.navCtrl.pop(); 
    }else{
      let toast = this.toastCtrl.create({ message: 'Amount exceeds available balance', duration: 3000 });
      toast.present();
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

  dismissThis() {
    this.navCtrl.pop();
  } 

}
