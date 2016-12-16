import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'Welcome to the Online Course Tracker App!';
  courses: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.courses = af.database.list('/courses');
  }
}
