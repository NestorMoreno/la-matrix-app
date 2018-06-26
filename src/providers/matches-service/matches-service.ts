import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../../providers/general-service/general-service';

@Injectable()
export class MatchesServiceProvider {

  constructor(public http: HttpClient, public general:GeneralService) {
  }

  getAll() {
	  	return new Promise(resolve => {
	    	this.http.get(this.general.apiEndpoint + "matches")
	      	.subscribe(data => {
	        	resolve(data);
	      	}, err => {
	      		console.log("ERROR getAll:", err);
	      	});
	  	});
	}

}
