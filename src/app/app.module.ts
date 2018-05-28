import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
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
import { ConfigsServiceProvider } from '../providers/configs-service/configs-service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
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
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigsServiceProvider
  ]
})
export class AppModule {}
