import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AppComponent } from '../../app.component';

import { Course } from '../../firebase/Course';
import { Category } from '../../firebase/Category';
import { Status } from '../../firebase/Status';

@Component({    
  selector: 'extendsection',
  templateUrl: 'extendsection.component.html',  
  styleUrls:  [ 'extendsection.component.css' ],
  providers: [ FirebaseService ]
})     

export class ExtendsectionComponent implements OnInit {
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
            
}