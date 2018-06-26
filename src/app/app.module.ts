import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { PlayersPage } from '../pages/players/players';
import { PlayerPage } from '../pages/player/player';
import { MatchPage } from '../pages/match/match';
import { MatchApplyPage } from '../pages/match/match-apply';
import { MatchRatePage } from '../pages/match/match-rate';
import { ChampionshipPage } from '../pages/championship/championship';
import { StatisticsPage } from '../pages/statistics/statistics';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push} from '@ionic-native/push';

import { ConfigsServiceProvider } from '../providers/configs-service/configs-service';
import { PlayersServiceProvider } from '../providers/players-service/players-service';


import { HttpClientModule } from '@angular/common/http';
import { GeneralService } from '../providers/general-service/general-service';
import { AuthProvider } from '../providers/auth/auth';

// Import Firebase / environment config and initialise
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import { ChampionshipsServiceProvider } from '../providers/championships-service/championships-service';
import { MatchesServiceProvider } from '../providers/matches-service/matches-service';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PlayersPage,
    PlayerPage,
    MatchPage,
    MatchApplyPage,
    MatchRatePage,
    ChampionshipPage,
    StatisticsPage,
    ProfilePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PlayersPage,
    PlayerPage,
    MatchPage,
    MatchApplyPage,
    MatchRatePage,
    ChampionshipPage,
    StatisticsPage,
    ProfilePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ConfigsServiceProvider,
    PlayersServiceProvider,
    GeneralService,
    AuthProvider,
    ChampionshipsServiceProvider,
    MatchesServiceProvider
  ]
})
export class AppModule {}
