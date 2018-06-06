import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { PlayersPage } from '../pages/players/players';
//import { PlayerPage } from '../pages/player/player';
import { MatchPage } from '../pages/match/match';
//import { ChampionshipPage } from '../pages/championship/championship';
//import { StatisticsPage } from '../pages/statistics/statistics';
//import { ProfilePage } from '../pages/profile/profile';
//import { SettingsPage } from '../pages/settings/settings';

import { Push, PushObject, PushOptions} from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl:AlertController, public push: Push, private _AUTH: AuthProvider) {
    this.initializeApp();

    // Navigation
    this.pages = [
      { title: 'Principal', component: HomePage, icon: 'football' },
      { title: 'Jugadores', component: PlayersPage, icon: 'people' },
      { title: 'Partidos', component: MatchPage, icon: 'calendar' },
      { title: 'Salir', component: LoginPage, icon: 'log-out' }
      //{ title: 'Campeonato', component: ChampionshipPage, icon: 'trophy' },
      //{ title: 'Estadísticas', component: StatisticsPage, icon: 'podium' },
      //{ title: 'Mi perfil', component: ProfilePage, icon: 'contact' },
      //{ title: 'Configuración', component: SettingsPage, icon: 'options' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.pushsetup();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    
    console.log("::::", page);
    if(page.title == 'Salir')
      {

        this._AUTH.logOut()
        .then((data : any) =>
        {
          this.nav.setRoot(page.component);
        })
        .catch((error : any) =>
        {
          console.dir(error);
        });
      }

      // Otherwise reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      else
      {
        this.nav.setRoot(page.component);
      }
  }

  pushsetup() {
    const options: PushOptions = {
     android: {
         senderID: '139476471212'
     },
     ios: {
         alert: 'true',
         badge: true,
         sound: 'true'
     },
     windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
      //alert('on notification');
      if (notification.additionalData.foreground) {
        let youralert = this.alertCtrl.create({
          title: 'Nueva notificación',
          message: notification.message
        });
        youralert.present();
      }
    });

    pushObject.on('registration').subscribe((registration: any) => {
       //alert('on registration');  
    });

    pushObject.on('error').subscribe(error => alert('Error con el plugin!!!' + error));
    }
}
