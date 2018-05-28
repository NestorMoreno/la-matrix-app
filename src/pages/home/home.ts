import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ConfigsServiceProvider} from '../../providers/configs-service/configs-service';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html',
  	providers: [ConfigsServiceProvider]
})

export class HomePage {
	public configs: any;
  	
  	constructor(public navCtrl: NavController, public configsService: ConfigsServiceProvider) {
  		this.loadConfigs();
  	}

  	loadConfigs(){
	  	this.configsService.load()
	  	.then(data => {
	  		console.log("DATA 2: ", data[0]);
	    	//this.people = data;
	  	});
	}

}
