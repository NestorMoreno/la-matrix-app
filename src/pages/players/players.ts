import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlayerPage } from '../player/player';

import { PlayersServiceProvider } from '../../providers/players-service/players-service';
import _ from 'lodash';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {
  selectedItem: any;
  items: Array<{icon: string, title: string, state: string }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public players:PlayersServiceProvider) {
    this.selectedItem = navParams.get('item');

    this.loadPlayers();

    //state: 'md-trending-down'
    //state: 'md-trending-up'
    //state: 'md-remove'
    //state: 'md-medkit'

    //this.items.push({
    //  icon: 'person',
    //  title: 'Cesar Camacho',
    //  state: 'md-remove'
    //});
    
  }

  loadPlayers() {

    this.players.load().then(data => {
        _.map(data, 
          (o) => {
            this.items.push({
              icon: 'person',
              title: o.name,
              state: this.getStatus(o.status),
            });
          }
        );
        //console.log("PLAYERS2:", data)
      });
    
  }

  getStatus(s){
    let ret = '';
    switch(s) {
      case 1:
          ret = 'md-trending-up';
          break;
      case 0:
          ret = 'md-remove';
          break;
      case -1:
          ret = 'md-trending-down';
          break;
      case -2:
          ret = 'md-medkit';
          break;
      default:
          ret = '';
    }
    return ret;
  }



  itemTapped(event, item) {
    console.log("ITEM: ", item);
    this.navCtrl.push(PlayerPage, {
      item: item
    });
  }
}
