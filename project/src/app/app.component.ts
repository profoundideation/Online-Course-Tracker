import { Component, OnInit, Inject, forwardRef, Input } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
// import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';

import { Course } from './Course';
import { Category } from './Category';
import { Status } from './Status';

import { AddformComponent } from './components/addform/addform.component';
// import { EditformComponent } from './components/editform/editform.component';
// import { ExtendsectionComponent } from './components/extendsection/extendsection.component';
// import { ReviewComponent } from './components/review/review.component';
// import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // declarations: [ EditformComponent ],  
  /* declarations: [ ], */ /* ReviewComponent,  ExtendsectionComponent */
  providers: [ FirebaseService, /* GithubService, HTTP_PROVIDERS */]
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

  constructor(private _firebaseService: FirebaseService) {
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

  filterCategory(category) {
    if (category == "All") {
      this._firebaseService.getCourses()
        .subscribe(courses => {          
          this.courses = courses;
        });
    } else {
      this._firebaseService.getCourses(category).subscribe(courses => {
        this.courses = courses;
      });
    }
  }

  changeState(state, key:any = null) {
    console.log('Changing state to: '+state);
    if(key){
      console.log('Changing key to: '+key);
      this.activeKey = key;
    }
    this.appState = state;
  } 
     

      showEdit(course) {
       this.changeState('edit', course.$key);
       this.activeSchool = course.school,
       this.activeName = course.name;
       this.activeUrl = course.url;
       this.activeCategory = course.category;
       this.activeStatus = course.status;
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
}
