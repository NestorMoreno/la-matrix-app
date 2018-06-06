import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
// Import the HomePage component
import { HomePage } from '../home/home';

import { Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  	selector: 'page-login',
  	templateUrl: 'login.html',
})
export class LoginPage {
	/**
    * Create reference for FormGroup object
	*/
   	public form: FormGroup;

  	constructor(public navCtrl: NavController, public navParams: NavParams, private _FB: FormBuilder, private _AUTH: AuthProvider, public events: Events, public alertCtrl: AlertController) {
  		
  		// Define FormGroup object using Angular's FormBuilder
      	this.form = this._FB.group({
         	'email'        : ['', Validators.required],
         	'password'     : ['', Validators.required]
      	});

      	this.events.subscribe('user:logged', (state) => {
    		
    		if (state) {
    			this.navCtrl.setRoot(HomePage);
    		}
	    	
	  	});
  	}

  	/**
    * Log in using the loginWithEmailAndPassword method
    * from the AuthProvider service (supplying the email
    * and password FormControls from the template via the
    * FormBuilder object
    * @method logIn
    * @return {none}
    */
   	logIn() : void
   	{
      	let email: any = this.form.controls['email'].value, password: any= this.form.controls['password'].value;

      	this._AUTH.loginWithEmailAndPassword(email, password)
      	.then((auth : any) =>
      	{
         	this.navCtrl.setRoot(HomePage);
      	})
      	.catch((error : any) =>
      	{
      		this.showAlert("Los datos ingresados no son válidos.");
         	console.log(error.message);
      	});
   	}

   	showAlert(msg) {
	    const alert = this.alertCtrl.create({
	      	title: 'La-Matrix dice:',
	      	subTitle: msg,
	      	buttons: ['Aceptar']
	    });
		alert.present();
	}


  	ionViewDidLoad() {
  	}

}
