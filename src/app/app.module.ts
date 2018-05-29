import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TransactionsListingPage } from '../pages/transactions-listing/transactions-listing';
import { ContactPage } from '../pages/contact/contact';
import { AtmOperationsPage } from '../pages/atm-operations/atm-operations';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AtmserviceProvider } from '../providers/atmservice/atmservice';
import { HttpinterceptorProvider } from '../providers/httpinterceptor/httpinterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    TransactionsListingPage,
    ContactPage,
    AtmOperationsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [ //This tells the app to load these components
    MyApp,
    TransactionsListingPage,
    ContactPage,
    AtmOperationsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AtmserviceProvider,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpinterceptorProvider,
        multi: true
    } ,
    HttpinterceptorProvider
  ]
})
export class AppModule {}
