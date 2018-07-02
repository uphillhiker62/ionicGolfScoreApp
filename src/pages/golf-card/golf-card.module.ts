import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GolfCardPage } from './golf-card';

@NgModule({
  declarations: [
    GolfCardPage,
  ],
  imports: [
    IonicPageModule.forChild(GolfCardPage),
  ],
})
export class GolfCardPageModule {}
