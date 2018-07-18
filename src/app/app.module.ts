import { CoursesApiService } from './../providers/courses-api/courses-api.service';
// import { KeysPipe } from './../pipes/keys/keys';
// import { HighScoresPageModule } from './../pages/high-scores/high-scores.module';
// import { GolfCardPageModule } from './../pages/golf-card/golf-card.module';
// import { PlayersPageModule } from './../pages/players/players.module';
// import { AllTeesPageModule } from './../pages/all-tees/all-tees.module';
// import { AllCoursesPageModule } from './../pages/all-courses/all-courses.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AllCoursesPage } from './../pages/all-courses/all-courses';
import { AllTeesPage } from '../pages/all-tees/all-tees';
import { PlayersPage } from '../pages/players/players';
import { HighScoresPage } from '../pages/high-scores/high-scores';
import { GolfCardPage } from '../pages/golf-card/golf-card';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllCoursesPage,
    AllTeesPage,
    PlayersPage,
    GolfCardPage,
    HighScoresPage


    // KeysPipe
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
    AllCoursesPage,
    AllTeesPage,
    PlayersPage,
    GolfCardPage,
    HighScoresPage
    // KeysPipe
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoursesApiService
  ]
})
export class AppModule {}
