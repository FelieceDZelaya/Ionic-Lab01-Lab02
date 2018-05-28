import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { TabsPage } from '../../pages/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   myForm : FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadCtrl: LoadingController,
              public toastCtrl: ToastController,
              public atmService: AtmserviceProvider) {
  
    this.myForm = new FormGroup({
      accountNumber : new FormControl('',Validators.required),
      pinNumber : new FormControl('',Validators.required)
    });
   
  }

  doLogin() {

    let loader = this.loadCtrl.create({content: 'Authenticating'});
    loader.present();

    let accountNumber = this.myForm.get("accountNumber").value;
    let pinNumber = this.myForm.get("pinNumber").value;

    this.atmService.setAccountNumber(accountNumber,pinNumber).then(
      (succ) => {
        loader.dismiss();
        let myAlert = this.alertCtrl.create({
          title: "It worked!",
          subTitle: "Account Number: " + accountNumber,
          buttons: ['Ok']
        });
        myAlert.present();
        this.navCtrl.push(TabsPage);
      },
      (err) => {
        let toast = this.toastCtrl.create({message:'Invalid Credentials',duration:3000});
        toast.present();
        loader.dismiss();
      }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
