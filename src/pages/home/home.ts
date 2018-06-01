import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GeneralService } from '../../providers/general-service/general-service';
import { ConfigsServiceProvider } from '../../providers/configs-service/configs-service';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html',
  	providers: [ConfigsServiceProvider]
})

export class HomePage {
  home: { mainText:string } = { mainText:""};
  	
  constructor(public navCtrl: NavController, public configsService: ConfigsServiceProvider, public general:GeneralService) {
  		this.loadConfigs();
  }

  loadConfigs(){
	  	this.configsService.load()
	  	.then(data => {
        this.general.loadConfigs(data);
	  	});
	}

}
