import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  	selector: 'page-match-apply',
  	templateUrl: 'match-apply.html'
})

export class MatchApplyPage {
	match: any;
  	constructor(public viewCtrl: ViewController) {
		this.match = { rate1: 50, rate2: 40, rate3: 30 };
  	}

  	apply() {
		
    }

  	dismiss() {
		let data = { };
		this.viewCtrl.dismiss(data);
    }
  
}
