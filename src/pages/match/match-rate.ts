import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page-match-rate',
    templateUrl: 'match-rate.html'
})

export class MatchRatePage {
    match: {rate1: number, rate2: number, rate3: number, rate4: number, rate5: number };
  	
  	constructor(public viewCtrl: ViewController) {
      this.match = { rate1: 50, rate2: 40, rate3: 30, rate4:50, rate5:76 };
  	}

  	dismiss() {
		  let data = { };
      this.viewCtrl.dismiss(data);
    }
}
