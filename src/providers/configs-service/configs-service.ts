import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../../providers/general-service/general-service';

@Injectable()
export class ConfigsServiceProvider {

 	constructor(public http: HttpClient, public general:GeneralService) {
 		//console.log("---", general.apiEndpoint)

  	}

	load() {
	  	return new Promise(resolve => {

	    	this.http.get(this.general.apiEndpoint + 'configs')
	      	.subscribe(data => {
	        	resolve(data);
	      	}, err => {
	      		console.log("ERROR load:", err);
	      	});
	  	});
	}
}
