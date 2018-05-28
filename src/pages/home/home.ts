import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { AtmTransaction } from '../../models/atm.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentBalance : number = 0;
  transactions : Array<AtmTransaction> = [];

  constructor(public navCtrl: NavController,
              public atmService: AtmserviceProvider) { }

  ionViewCanEnter() {
    return this.atmService.accountValid;
  }

  ionViewWillEnter() { 
    this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(resp => {
      this.currentBalance = resp.currentBalance;
      this.atmService.accountName = resp.accountName;
    });
  }

  getAccountName() : string{
    return this.atmService.accountName; 
  }

  getAccountBalance() {
    return this.atmService.getCurrentBalance(this.atmService.accountNumber);
  }

  goToWithdrawal() {
    this.navCtrl.push("WithdrawalPage",{acc : this.atmService.accountNumber});
  }

  goToDeposit() {
    this.navCtrl.push("DepositPage",{acc : this.atmService.accountNumber});
  }



}
