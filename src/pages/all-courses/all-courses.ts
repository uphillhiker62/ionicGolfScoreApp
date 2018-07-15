import { CoursesApiService } from './../../providers/courses-api/courses-api.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-all-courses',
  templateUrl: 'all-courses.html',
})
export class AllCoursesPage {

  selectedCourse: any;
  private courseOptions: Array<{name: string, image: string, id: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public courseAPI: CoursesApiService) {
    this.selectedCourse = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllCoursesPage');
    this.courseAPI.findCourses().subscribe(data => {this.courseOptions = data.courseOptions});
    console.log(this.courseOptions);
  }

}
