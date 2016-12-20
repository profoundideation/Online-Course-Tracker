import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Course } from '../Course';
import { Category } from '../Category';

@Injectable()
export class FirebaseService{
    courses: FirebaseListObservable<Course[]>;
    categories: FirebaseListObservable<Category[]>;

    constructor(private _af: AngularFire) {

    }

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
}
