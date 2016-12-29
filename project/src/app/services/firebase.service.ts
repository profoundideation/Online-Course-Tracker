import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable } from "angularfire2";
import "rxjs/add/operator/map";

import { AllCourses } from "../firebase/AllCourses";
import { UserCourse } from "../firebase/UserCourse";
import { Category } from "../firebase/Category";
import { Status } from "../firebase/Status";
import { User } from "../firebase/User";

@Injectable()
export class FirebaseService {
    
     allcourses: FirebaseListObservable < AllCourses[] > ;
     usercourses: FirebaseListObservable < UserCourse[] > ;
     categories: FirebaseListObservable < Category[] > ;
     statuses: FirebaseListObservable < Status[] > ;
     user: FirebaseListObservable < User[] > ;

     constructor(private _af: AngularFire) {}

     getCourses(category: string = null) {
          if (category != null) {
               //        this.courses = this._af.database.list('/usercourses', {
               this.allcourses = this._af.database.list('/allcourses', {
                    query: {
                         orderByChild: 'category',
                         equalTo: category
                    }
               }) as
               FirebaseListObservable < AllCourses[] >
          } else {
               /*
                           this.courses = this._af.database.list('/usercourses') as
                           FirebaseListObservable<Course []>
               */
               this.allcourses = this._af.database.list('/allcourses') as
               FirebaseListObservable < AllCourses[] >
          }
          return this.allcourses;
     }

     getCategories() {
          this.categories = this._af.database.list('/categories') as
          FirebaseListObservable < Category[] >
               return this.categories;
     }

     getStatuses() {
          this.statuses = this._af.database.list('/statuses') as
          FirebaseListObservable < Status[] >
               return this.statuses;
     }

     getUserCourses(category: string = null) {
          if (category != null) {
               this.usercourses = this._af.database.list('/users', {
                    query: {
                         orderByChild: 'category',
                         equalTo: category
                    }
               }) as
               FirebaseListObservable < UserCourse[] >
          } else {
               this.usercourses = this._af.database.list('/users') as
               FirebaseListObservable < UserCourse[] >
          }
          return this.usercourses;
     }

     addCourse(newCourse) {
          return this.allcourses.push(newCourse);
     }

     updateCourse(key, updCourse) {
          return this.allcourses.update(key, updCourse);
     }

     deleteCourse(key) {
          return this.allcourses.remove(key);
     }
}