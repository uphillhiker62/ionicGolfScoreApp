import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CoursesApiService} from "../../services/courses-api.service";
import {PlayersPage} from "../players/players";

/**
 * Generated class for the DifficultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-tees',
  templateUrl: 'all-tees.html',
})
export class AllTeesPage {

  public courseId: any;
  teeBoxDetails: any;
  tees: Array<object> = [];
  boxTeesLength: number;
  indexOf: Array<object> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public API: CoursesApiService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DifficultyPage');
    this.courseId = this.navParams.data.courseId.id;
    console.log('course ID #' + this.courseId);

    this.API.returnCourseDetails(this.courseId).subscribe(data => {
      this.teeBoxDetails = data.data;
      this.boxTeesLength = this.teeBoxDetails.holes[0].teeBoxes.length;
      for(let i = 0; i < this.boxTeesLength; i++){
        if(this.teeBoxDetails.holes[0].teeBoxes[i].teeType !== "auto change location") {
          this.tees.push({ 'tee': this.teeBoxDetails.holes[0].teeBoxes[i].teeType , 'indexNum': i });
        }
      }
      console.log(this.tees);

    });

  }

  selectedDifficulty(event, courseId, tee){
    this.navCtrl.push(PlayersPage, {
      courseId: courseId,
      tee: tee
    });
  }

}


