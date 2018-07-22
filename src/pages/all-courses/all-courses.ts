import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

import { AllTeesPage } from '../all-tees/all-tees';
import { Component } from '@angular/core';
import {CoursesApiService} from "../../services/courses-api.service";

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-courses',
  templateUrl: 'all-courses.html',
})
export class AllCoursesPage {

  selectedItem: any;
  private courseOptions: Array<{ name: string, id: number, image: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public API: CoursesApiService,
    public loadingCtrl: LoadingController
  ) {
    this.selectedItem = navParams.get('item');
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');

    const loader = this.loadingCtrl.create({
      content: "Loading Local Courses.."
    });
    loader.present().then(() => {
      this.API.findCourses().subscribe(data => {
        this.courseOptions = data.courses;
        loader.dismiss();
        console.log(this.courseOptions);
      });
    });
  }

  courseChosen(event, courseId) {
    this.navCtrl.push(AllTeesPage, {
      courseId: courseId
    });
  }
}