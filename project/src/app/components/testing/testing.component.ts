import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';

import { AddformComponent } from '../addform/addform.component';
import { AllCourses } from '../../models/AllCourses';
import { UserCourse } from '../../models/UserCourse';
import { Category } from '../../models/Category';
import { Status } from '../../models/Status';


@Component({
     selector: 'testing',
     styleUrls: [ 'testing.component.css' ],
     templateUrl: 'testing.component.html'
})

export class TestingComponent {
  constructor(private auth: AuthService) {
  }
}
