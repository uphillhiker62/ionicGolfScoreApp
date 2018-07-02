import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighScoresPage } from './high-scores';

@NgModule({
  declarations: [
    HighScoresPage,
  ],
  imports: [
    IonicPageModule.forChild(HighScoresPage),
  ],
})
export class HighScoresPageModule {}
