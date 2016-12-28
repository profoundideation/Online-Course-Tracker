import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'all-courses',
  templateUrl: 'all-courses.component.html'
})

export class AllCourseComponent {
  constructor(private auth: Auth) {
  }
}