import { Injectable } from '@angular/core';
import _ from 'lodash';


@Injectable()
export class GeneralService {
	public configs:{} = {};
	public version:string = "0.0.1";

	constructor() {
    	console.log('General');
  	}


	public loadConfigs(data){
		_.map(data, (o) => this.configs[o.name] = o.value);
	}
}
