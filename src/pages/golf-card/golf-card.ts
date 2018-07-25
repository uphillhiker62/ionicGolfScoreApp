import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Component} from '@angular/core';
import {CoursesApiService} from "../../services/courses-api.service";

@IonicPage()
@Component({
  selector: 'page-golf-card',
  templateUrl: 'golf-card.html',
})
export class GolfCardPage {

  public params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public coursesAPI: CoursesApiService){}

  courseDetails:any;
  pArray: Array<any> = [];
  players;
  holes;
  holesIn: Array<any> = [];
  holesOut: Array<any> = [];
  tee: string;
  teeIndex: number = 0;
  totalYardsIn: number = 0;
  totalParIn: number = 0;
  totalHCPIn: number = 0;
  totalYardsOut: number = 0;
  totalParOut: number = 0;
  totalHCPOut: number = 0;
  totalPIn : number = 0;
  totalPOut : number = 0;

  ionViewDidLoad() {

    console.log('ionViewDidLoad ScoreCardPage');
    this.params = this.navParams.data;
    // console.log('the params ');
    // console.log(  this.params );

    this.coursesAPI.returnCourseDetails(this.navParams.data.courseInfo.courseId.id).subscribe(data => {

      this.courseDetails = data.data;
      this.holes = this.courseDetails.holes;
      this.tee = this.navParams.data.courseInfo.tee.tee;
      this.teeIndex = this.navParams.data.courseInfo.tee.indexNum;

      // console.log('tee index')
      // console.log(this.teeIndex)

      for (let i = 0; i < 9; i++){
        this.holesIn.push(this.courseDetails.holes[i]);
      }
      for (let i = 9; i < 18; i++){
        this.holesOut.push(this.courseDetails.holes[i])
      }
      for (let i = 0; i < this.holesIn.length; i++){
        this.totalYardsIn += Number(this.holesIn[i].teeBoxes[this.teeIndex].yards);
        this.totalParIn += Number(this.holesIn[i].teeBoxes[this.teeIndex].par);
        this.totalHCPIn += Number(this.holesIn[i].teeBoxes[this.teeIndex].hcp);
      }
      for (let i = 0; i < this.holesOut.length; i++){
        this.totalYardsOut += Number(this.holesOut[i].teeBoxes[this.teeIndex].yards);
        this.totalParOut += Number(this.holesOut[i].teeBoxes[this.teeIndex].par);
        this.totalHCPOut += Number(this.holesOut[i].teeBoxes[this.teeIndex].hcp);
      }
      // console.log('holes In');
      // console.log(this.holesIn);
      // console.log('holes Out');
      // console.log(this.holesOut);


      // console.log('course details ');
      // console.log( this.courseDetails );
      this.players = this.params.numberOfPlayers;
      // console.log(this.params.numberOfPlayers);
      for(let i = 0; i < this.players; i++){
        this.pArray.push('P ' + (i+1));
      }
      // console.log('this.pArray');
      // console.log( this.pArray )
    });
  }

  totalHoles() {

    let courseLen = this.holes.length;
    for (let p = 0; p < this.pArray.length; p++) {
      this.totalPIn = 0;
      this.totalPOut = 0;
      if (p < this.pArray.length) {
        for (let h = 0; h < courseLen; h++) {
          if (h <= 8) {
            let selectedInput = document.getElementById(`p${p}h${h}`);
            // console.log(selectedInput);
            this.totalPIn += Number(selectedInput);

            // console.log("total in "+this.totalPIn);
            document.getElementById('Player' + p + 'scoreIn').innerText = String(this.totalPIn);

          }
          if (h < courseLen && h >= 10) {
            let selectedInput = document.getElementById(`p${p}h${h}`);
            console.log(selectedInput);
            // this.totalPOut += Number(selectedInput.value);
            console.log("total out "+this.totalPOut);
            document.getElementById('Player' + p + 'scoreOut').innerText = String(this.totalPOut);
          }
        }
        document.getElementById('Player' + p + 'totalScore').innerText = String(this.totalPIn + this.totalPOut);
      }
    }
  }
}