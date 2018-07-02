import { KeysPipe } from './../pipes/keys/keys';
import { HighScoresPageModule } from './../pages/high-scores/high-scores.module';
import { GolfCardPageModule } from './../pages/golf-card/golf-card.module';
import { PlayersPageModule } from './../pages/players/players.module';
import { AllTeesPageModule } from './../pages/all-tees/all-tees.module';
import { AllCoursesPageModule } from './../pages/all-courses/all-courses.module';
import { AllCoursesPage } from './../pages/all-courses/all-courses';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AllCoursesPageModule,
    AllTeesPageModule,
    PlayersPageModule,
    GolfCardPageModule,
    HighScoresPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    KeysPipe
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
