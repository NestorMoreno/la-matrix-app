import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlayerPage } from '../player/player';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {
  selectedItem: any;
  icons: string[];
  items: Array<{icon: string, title: string, state: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
   
    this.items.push({
      icon: 'person',
      title: 'Eduardo Quintero',
      state: 'md-trending-down'
    });

    this.items.push({
      icon: 'person',
      title: 'William Sogamoso',
      state: 'md-trending-up'
    });

    this.items.push({
      icon: 'person',
      title: 'Cesar Camacho',
      state: 'md-remove'
    });

    this.items.push({
      icon: 'person',
      title: 'Andrés Rojas',
      state: 'md-trending-down'
    });

    this.items.push({
      icon: 'person',
      title: 'Luis Suanca',
      state: 'md-medkit'
    });

    
  }

  itemTapped(event, item) {
    console.log("ITEM: ", item);
    this.navCtrl.push(PlayerPage, {
      item: item
    });
  }
}
