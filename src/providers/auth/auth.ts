//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';
import { Events } from 'ionic-angular';

@Injectable()
export class AuthProvider {

	public user : Observable<any>;

  	constructor(public http: Http, public events: Events) {
  		this.userIsLogged();
  	}

  	userIsLogged(){
  		firebase.auth().onAuthStateChanged((user) =>
      	{
      		var res = false;
        	if (user)
        	{
          		console.log('User autenticado:', user);
          		res = true;
        	}
        	else
        	{
          		console.log('Usuario no autenticado');
        	}

        	this.events.publish('user:logged', res);
      });
  	}

  	/**
    * Use Firebase Web API signInWithEmailAndPassword method
    * to authenticate user login attempt
    *
    * @method loginWithEmailAndPassword
    * @param email    {string}      User e-mail address
    * @param password {string}      E-mail account password
    * @return {Promise}
    */
  	loginWithEmailAndPassword(email: string, password : string) : Promise<any>
   	{
      	return new Promise((resolve, reject) =>
      	{
        	firebase
         	.auth()
         	.signInWithEmailAndPassword(email, password)
         	.then((val : any) =>
         	{
            	resolve(val);
         	})
         	.catch((error : any) =>
         	{
            	reject(error);
         	});
      	});
   	}

   	/**
    * Log out with Firebase Web API signOut method
    *
    * @method logOut
    * @return {Promise}
    */
   	logOut() : Promise<any>
   	{
      	return new Promise((resolve, reject) =>
      	{
        	firebase
        	.auth()
        	.signOut()
        	.then(() =>
        	{
           		resolve(true);
        	})
        	.catch((error : any) =>
        	{
           		reject(error);
        	});
      	});
   	}

}
