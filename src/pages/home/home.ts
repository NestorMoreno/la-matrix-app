import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ConfigsServiceProvider} from '../../providers/configs-service/configs-service';
import {GeneralService} from '../../providers/general-service/general-service';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html',
  	providers: [ConfigsServiceProvider]
})

export class HomePage {
  home: { mainText:string } = { mainText:""};
  	
  constructor(public navCtrl: NavController, public configsService: ConfigsServiceProvider, public general:GeneralService) {
  		this.loadConfigs(general);
  }

  loadConfigs(general){
	  	this.configsService.load()
	  	.then(data => {
        general.loadConfigs(data);
	  	});
	}

}
