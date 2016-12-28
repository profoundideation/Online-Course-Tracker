import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Auth } from './services/auth.service';
import 'rxjs/add/operator/map';

import { Course } from './Course';
import { Category } from './Category';
import { Status } from './Status';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FirebaseService ]
})

export class AppComponent implements OnInit {
  courses: Course[];
  categories: Category[];
  statuses: Status[];
  appState: string;
  activeKey: string;
  activeSchool: string;
  activeName: string;
  activeUrl: string;
  activeCategory: string;
  activeStatus: string;

  constructor(private _firebaseService: FirebaseService, private auth: Auth) {
  }

  ngOnInit() {
    this._firebaseService.getCourses()
      .subscribe(courses => {        
        this.courses = courses;
      });

    this._firebaseService.getCategories()
      .subscribe(categories => {
        //console.log(categories);
        this.categories = categories;
      });

    this._firebaseService.getStatuses()
      .subscribe(statuses => {
        //console.log(categories);
        this.statuses = statuses;
      });
  }
}
