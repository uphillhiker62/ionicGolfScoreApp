import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AllCoursesPage } from "../all-courses/all-courses";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  courseSelect(){
    this.navCtrl.push(AllCoursesPage);
  }

}
