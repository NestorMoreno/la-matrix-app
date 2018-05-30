import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { MatchApplyPage } from '../match/match-apply';
import { MatchRatePage } from '../match/match-rate';

@Component({
  selector: 'page-match',
  templateUrl: 'match.html'
})
export class MatchPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  applyModal() {
    let modal = this.modalCtrl.create(MatchApplyPage);
    modal.present();
  }

  rateModal() {
    let modal = this.modalCtrl.create(MatchRatePage);
    modal.present();
  }
}
