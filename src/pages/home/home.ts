import { AllCoursesPage } from './../all-courses/all-courses';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  courseSelect() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AllCoursesPage);
  }

}
