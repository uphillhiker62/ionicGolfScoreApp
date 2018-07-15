import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CoursesApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoursesApiService {


  constructor(public http: HttpClient) {}

  private API = 'https://www.uxcobra.com/golfapi/course';
  private selecteCourse: any = {};

  findCourses(): Observable<any> {
    return this.http.get(`${this.API}s`);
  }

  returnCourseDetails(courseId): Observable<any>{
    return this.http.get(`${this.API}${courseId}`);
  }

}
