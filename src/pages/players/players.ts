import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursesApiService } from "../../services/courses-api.service";
import { GolfCardPage } from "../golf-card/golf-card";


@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  public params: any = {};
  public numberValue: number;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public golfApi: CoursesApiService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerSelectPage');
    this.params = this.navParams.data;
    console.log(this.params);




  }

  logStuff(){
    console.log(this.numberValue);
  }

  selectNumberOfPlayers(event, courseInfo, numberOfPlayers:number){
    this.navCtrl.push(GolfCardPage, {
      courseInfo: courseInfo,
      numberOfPlayers: numberOfPlayers


    });
  }

}
