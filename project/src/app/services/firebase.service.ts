import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Course } from '../Course';
import { Category } from '../Category';
import { Status } from '../Status';

@Injectable()
export class FirebaseService{
    courses: FirebaseListObservable<Course[]>;
    categories: FirebaseListObservable<Category[]>;
    statuses: FirebaseListObservable<Status[]>;

    constructor(private _af: AngularFire) { }

getCourses(category:string = null) {
    if(category != null){
        this.courses = this._af.database.list('/courses', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as
            FirebaseListObservable<Course[]>
        } else {
            this.courses = this._af.database.list('/courses') as 
            FirebaseListObservable<Course[]>
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
