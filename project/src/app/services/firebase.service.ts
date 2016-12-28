import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Course } from '../firebase/Course';
import { UserCourses } from '../firebase/UserCourses';
import { Category } from '../firebase/Category';
import { Status } from '../firebase/Status';

@Injectable()
export class FirebaseService{
    courses: FirebaseListObservable<Course[]>;
    usercourses: FirebaseListObservable<UserCourses[]>;
    categories: FirebaseListObservable<Category[]>;
    statuses: FirebaseListObservable<Status[]>;

    constructor(private _af: AngularFire) { }

getCourses(category:string = null) {
    if(category != null){
        this.courses = this._af.database.list('/allcourses', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as
            FirebaseListObservable<Course[]>
        } else {
            this.courses = this._af.database.list('/allcourses') as
            FirebaseListObservable<Course []>
        }
        return this.courses;
    }

    getCategories() {
        this.categories = this._af.database.list('/categories') as
        FirebaseListObservable<Category[]>
        return this.categories;
    }

    getStatuses() {
        this.statuses = this._af.database.list('/statuses') as
        FirebaseListObservable<Status[]>
        return this.statuses;
    }

  getUserCourses() {
      this.usercourses = this._af.database.list('/user') as
      FirebaseListObservable<UserCourses[]>
      return this.usercourses;
  }

    addCourse(newCourse) {
        return this.courses.push(newCourse);
    }

    updateCourse(key, updCourse){
        return this.courses.update(key, updCourse);
    }

    deleteCourse(key){
        return this.courses.remove(key);
    }
}
