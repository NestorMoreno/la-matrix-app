import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigsServiceProvider {

 	constructor(public http: HttpClient) {
    	console.log('Hello ConfigsServiceProvider Provider');
  	}

	load() {
	  	return new Promise(resolve => {
	    	this.http.get('https://la-matrix.herokuapp.com/api/configs')
	      	.subscribe(data => {
	        	resolve(data);
	      	}, err => {
	      		console.log("ERROR load:", err);
	      	});
	  	});
	}
}
