import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CoursesApiService {

  constructor( private http: HttpClient ){}

  private coursesAPI = 'https://www.uxcobra.com/golfapi/course';

  findCourses(): Observable<any> {
    return this.http.get(`${this.coursesAPI}s`);
  }

  returnCourseDetails(courseId): Observable<any>{
    return this.http.get(`${this.coursesAPI}${courseId}`);
  }
  

}

