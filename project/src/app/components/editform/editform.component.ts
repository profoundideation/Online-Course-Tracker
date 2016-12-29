import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AppComponent } from '../../app.component';

import { UserCourse } from '../../firebase/UserCourse';
import { Category } from '../../firebase/Category';
import { Status } from '../../firebase/Status';

@Component({    
  selector: 'editform',
  templateUrl: 'editform.component.html',  
  styleUrls: [ 'editform.component.css' ],
  providers: [ FirebaseService ]
})     

export class EditformComponent implements OnInit {
  @Input()   
  usercourses: UserCourse[];
  allcourses: AllCourse[];
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
        this._firebaseService.getUserCourses()
          .subscribe(usercourses => {        
            this.usercourses = usercourses;
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
}