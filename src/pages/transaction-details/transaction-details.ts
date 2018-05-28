import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtmTransaction } from '../../models/atm.interface';

@IonicPage()
@Component({
  selector: 'page-transaction-details',
  templateUrl: 'transaction-details.html',
})
export class TransactionDetailsPage {

  transaction : AtmTransaction;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transaction = navParams.get("item");
  }

  dismissThis() {
    this.navCtrl.pop();
  } 

}
