import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { AtmTransaction } from '../../models/atm.interface';

@Component({
  selector: 'page-transactions-listing',
  templateUrl: 'transactions-listing.html'
})
export class TransactionsListingPage {

  transactions : Array<AtmTransaction> = [];

  constructor(public navCtrl: NavController,
              public atmService: AtmserviceProvider) {

  }

  ionViewWillEnter() {
    this.atmService.getLastOperations(this.atmService.getAccountNumber()).subscribe( data => {
      this.transactions = data.transactions;
    });
  }

  goToDetails(item:AtmTransaction) {
    this.navCtrl.push("TransactionDetailsPage",{item : item});
  }

}
