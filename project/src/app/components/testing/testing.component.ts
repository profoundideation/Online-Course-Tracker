import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';

import { AddformComponent } from '../addform/addform.component';
import { AllCourses } from '../../firebase/AllCourses';
import { UserCourse } from '../../firebase/UserCourse';
import { Category } from '../../firebase/Category';
import { Status } from '../../firebase/Status';


@Component({
     selector: 'testing',
     styleUrls: [ 'testing.component.css' ],
     templateUrl: 'testing.component.html'
})

export class TestingComponent {
  constructor(private auth: Auth) {
  }
}
