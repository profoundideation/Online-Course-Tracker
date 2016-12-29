import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Auth } from './services/auth.service';
import 'rxjs/add/operator/map';

// import { Course } from './firebase/Course';
import { Category } from './firebase/Category';
import { Status } from './firebase/Status';
import { UserCourse } from './firebase/UserCourse';
import { AllCourses } from "./firebase/AllCourses";
@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css'],
     providers: [FirebaseService]
})

export class AppComponent implements OnInit {
     allcourses: AllCourses[];
     categories: Category[];
     statuses: Status[];
     usercourses: UserCourse[];
     profile: any;
     appState: string;
     activeKey: string;
     activeSchool: string;
     activeName: string;
     activeUrl: string;
     activeCategory: string;
     activeStatus: string;

     constructor(private _firebaseService: FirebaseService, private auth: Auth) {}

     ngOnInit() {
          /*
              this._firebaseService.getUserCourses()
                .subscribe(usercourses => {
                  this.usercourses = usercourses;
                });
          */
          /*
            this._firebaseService.getCourses()
              .subscribe(courses => {
                this.courses = courses;
            });
          */

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

          this._firebaseService.getUserCourses()
               .subscribe(users => {
                    var list = []
                    this.profile = JSON.parse(localStorage.getItem('profile'));
                    for (var i in users) {
                         if (users[i].name == this.profile.given_name) {
                              list.push(users[i]["usercourses"]);
                         }
                    }
                    //console.log('list : ', list);
                    this.usercourses = list;
               });
     }
}