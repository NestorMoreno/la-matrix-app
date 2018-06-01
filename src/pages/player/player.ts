import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GeneralService } from '../../providers/general-service/general-service';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {
  selectedItem: any;
  icons: string[];
  item: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public general:GeneralService) {
    this.item = navParams.data.item;
  }
}
