import { Injectable } from '@angular/core';
import _ from 'lodash';


@Injectable()
export class GeneralService {
	public configs:{} = {};
	public version:string = "0.0.1";
	public apiEndpoint:string = "https://la-matrix.herokuapp.com/api/";

	constructor() {
  	}


	public loadConfigs(data){
		_.map(data, (o) => this.configs[o.name] = o.value);
	}
}
