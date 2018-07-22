import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Component} from '@angular/core';
import {CoursesApiService} from "../../services/courses-api.service";

/**
 * Generated class for the ScoreCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-golf-card',
  templateUrl: 'golf-card.html',
})
export class GolfCardPage {

  public params: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public golfApi: CoursesApiService)
  {}
}