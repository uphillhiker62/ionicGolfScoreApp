import { AllTeesPage } from './../all-tees/all-tees';
import { CoursesApiService } from './../../providers/courses-api/courses-api.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-all-courses',
  templateUrl: 'all-courses.html',
})
export class AllCoursesPage {

  selectedCourse: any;
  private courseOptions: Array<{name: string, image: string, id: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public courseAPI: CoursesApiService, public loader: LoadingController) {
    this.selectedCourse = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');

    const loader = this.loader.create({
      content: "Loading local courses.."
    });
    loader.present().then(() => {
      this.courseAPI.findCourses().subscribe(data => {
        this.courseOptions = data.courses;
        loader.dismiss();
        console.log(this.courseOptions);
      });
    });
  }

  chosenCourse(event, courseId) {
    this.navCtrl.push(AllTeesPage, {
      courseId: courseId
    });
  }

}
