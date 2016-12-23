import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AppComponent } from '../../app.component';

import { Course } from '../../Course';
import { Category } from '../../Category';
import { Status } from '../../Status';

@Component({    
  selector: 'addform',
  templateUrl: 'addform.component.html',  
  styleUrls: [ 'addform.component.css' ],
  providers: [ FirebaseService ]
})     

export class AddformComponent implements OnInit {
  courses:Course[];
  categories:Category[];
  statuses:Status[];
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
      
    addCourse(
          school: string,
          name: string,
          url: string,
          category: string,
          status: string) {
             let created_at = new Date().toString();     
             var newCourse = {
               school: school,
               name: name,
               url: url,
               category: category,
               status: status,
               created_at: created_at
             }
     
             // console.log(newCourse);      
             this._firebaseService.addCourse(newCourse);                        
             this.changeState('default');
          }
}