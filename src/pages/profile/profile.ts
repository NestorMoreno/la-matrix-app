import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
 	selector: 'page-profile',
  	templateUrl: 'profile.html'
})

export class ProfilePage {

	myDate: string = '01/01/2017';
	
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}
}
