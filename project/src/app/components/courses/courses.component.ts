import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import 'rxjs/add/operator/map';

import { AddformComponent } from '../addform/addform.component';
import { AllCourses } from '../../firebase/AllCourses';
import { UserCourse } from '../../firebase/UserCourse';
import { Category } from '../../firebase/Category';
import { Status } from '../../firebase/Status';

@Component({
    selector: 'courses',
    templateUrl: 'courses.component.html',
    styleUrls: [ 'courses.component.css' ],
    providers: [ FirebaseService ]
})

export class CoursesComponent implements OnInit {
    profile: any;
    usercourses: UserCourse[];
    allcourses: AllCourses[];
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
        this.profile = JSON.parse(localStorage.getItem('profile'));
    }

    ngOnInit() {
        this._firebaseService.getUserCourses()
            .subscribe(usercourses => {
              var list = [];
              var userlist = [];
              this.profile = JSON.parse(localStorage.getItem('profile'));
              for(var i in usercourses){
                if(usercourses[i].name == this.profile.given_name){
                  list.push(usercourses[i]["usercourses"]);
                }
              }
              for(var course in list[0]){
                userlist.push(list[0][course]);
              }
              // console.log('list: ', userlist)
              this.usercourses = userlist;
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

    filterCategory(category) {
        if (category == "All") {
            this._firebaseService.getUserCourses()
                .subscribe(usercourses => {
                    this.usercourses = usercourses;
                });
        } else {
            this._firebaseService.getUserCourses(category).subscribe(usercourses => {
                this.usercourses = usercourses;
            });
        }
    }

    changeState(state, key: any = null) {
        console.log('Changing state to: ' + state);
        if (key) {
            console.log('Changing key to: ' + key);
            this.activeKey = key;
        }
        this.appState = state;
    }

    showEdit(usercourse) {
        this.changeState('edit', usercourse.$key);
        this.activeSchool = usercourse.school,
        this.activeName = usercourse.name;
        this.activeUrl = usercourse.url;
        this.activeCategory = usercourse.category;
        this.activeStatus = usercourse.status;
    }

    updateCourse() {
        var updCourse = {
            school: this.activeSchool,
            name: this.activeName,
            url: this.activeUrl,
            category: this.activeCategory,
            status: this.activeStatus
        }

        this._firebaseService.updateCourse(this.activeKey, updCourse);
        this.changeState('default');
    }

    deleteCourse(key) {
        this._firebaseService.deleteCourse(key);
        this.changeState('default');
    }

    /*
    user.firebase_data = {
      user_id: new Buffer(user.email).toString('base64'),
      company: !user.isSocial ? context.connection.replace(/\./g, '-') : null
    };
    */
}
