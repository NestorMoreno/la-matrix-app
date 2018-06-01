import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../../providers/general-service/general-service';

@Injectable()
export class PlayersServiceProvider {

 	constructor(public http: HttpClient, public general:GeneralService) {
  	}

	load() {
	  	return new Promise(resolve => {
	    	this.http.get(this.general.apiEndpoint + "players")
	      	.subscribe(data => {
	        	resolve(data);
	      	}, err => {
	      		console.log("ERROR load:", err);
	      	});
	  	});
	}
}
