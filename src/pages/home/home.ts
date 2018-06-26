import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GeneralService } from '../../providers/general-service/general-service';
import { ConfigsServiceProvider } from '../../providers/configs-service/configs-service';
import { MatchesServiceProvider } from '../../providers/matches-service/matches-service';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html',
  	providers: [ConfigsServiceProvider]
})

export class HomePage {
  home: { mainText:string } = { mainText:""};
  matches: Array<{_id: string, championship_id: string, teamA: any, teamB:any, description: string, scoreA: string, scoreB: string, finished: number, dateSubscription: string, dateStartMatch: string, dateEndMatch: string, place: string, price: string, state: number }>;
  	
  
  constructor(public navCtrl: NavController, public configsService: ConfigsServiceProvider, public general:GeneralService, public matchesService: MatchesServiceProvider) {
  		this.loadConfigs();
  }

  loadConfigs(){
	  	this.configsService.load()
	  	.then(data => {
        this.general.loadConfigs(data);
	  	});

      var teamA = {
          _id:"1", 
          name:"Equipo A",
          players: [
                    { name:"Edward Viancha", position:1 },
                    { name:"Andrés Rojas", position:2 },
                    { name:"Héctor Guerrero", position:2 },
                    { name:"Juan Pablo Castiblanco", position:2 },
                    { name:"Wilson Arguello", position:2 }
                   ],
          state:1
      };

      var teamB = {
          _id:"2", 
          name:"Equipo B",
          players: [
                    { name:"Eduardo Quintero", position:1 },
                    { name:"William Sogamoso", position:2 },
                    { name:"Andro Loewenstein", position:2 },
                    { name:"Jose Manuel Acero", position:2 },
                    { name:"Ricardo Fagua", position:2 }
                   ],
          state:1
      }

      var matchesList = [{
                    _id:"1", 
                    championship_id: "1", 
                    teamA: teamA,
                    teamB: teamB,
                    description: "Miércoles 30 de Mayo",
                    scoreA: "", 
                    scoreB: "", 
                    finished: 0, 
                    dateSubscription: "", 
                    dateStartMatch: "", 
                    dateEndMatch: "", 
                    place: "Cancha ECCI, Calle 170 # 45", 
                    price: "", 
                    state: 1
                  },
                  {
                    _id:"1",
                    teamA: { name: "Equipo A 3" },
                    teamB: { name: "Equipo A 4" },
                    description: "Miércoles 23 de Mayo",
                    scoreA: "8", 
                    scoreB: "6", 
                    finished: 1, 
                    dateSubscription: "1529884934533", 
                    dateStartMatch: "1529884934533", 
                    dateEndMatch: "1529884934533", 
                    place: "Prado", 
                    price: "", 
                    state: 1
                  },
                  {
                    _id:"1", 
                    teamA: { name: "Equipo A 5" },
                    teamB: { name: "Equipo A 6" },
                    description: "Miércoles 16 de Mayo",
                    scoreA: "2", 
                    scoreB: "5", 
                    finished: 1, 
                    dateSubscription: "1529884934533", 
                    dateStartMatch: "1529884934533", 
                    dateEndMatch: "1529884934533", 
                    place: "ECCI", 
                    price: "", 
                    state: 1
                  },
                  {
                    _id:"1", 
                    teamA: { name: "Equipo A 7" },
                    teamB: { name: "Equipo A 8" },
                    description: "Miércoles 9 de Mayo",
                    scoreA: "7", 
                    scoreB: "4", 
                    finished: 1, 
                    dateSubscription: "1529884934533", 
                    dateStartMatch: "1529884934533", 
                    dateEndMatch: "1529884934533", 
                    place: "Cancha ECCI, Calle 170 # 45", 
                    price: "", 
                    state: 1
                  },
                  ];


      this.matches = matchesList;
      //this.matchesService.getAll();
	}

}
