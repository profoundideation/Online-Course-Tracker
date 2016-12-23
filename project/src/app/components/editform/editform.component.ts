import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AppComponent } from '../../app.component';

import { Course } from '../../Course';
import { Category } from '../../Category';
import { Status } from '../../Status';

@Component({    
  selector: 'editform',
  templateUrl: 'editform.component.html',  
  styleUrls: [ 'editform.component.css' ],
  providers: [ FirebaseService ]
})     

export class EditformComponent implements OnInit {
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

    constructor(private _firebaseService: FirebaseService) {} 
    
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
      
      changeState(state, key:any = null){
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
}