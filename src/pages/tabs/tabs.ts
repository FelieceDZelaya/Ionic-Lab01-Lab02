import { Component } from '@angular/core';

import { TransactionsListingPage } from '../transactions-listing/transactions-listing';
import { ContactPage } from '../contact/contact';
import { AtmOperationsPage } from '../atm-operations/atm-operations';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AtmOperationsPage;
  tab2Root = TransactionsListingPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
