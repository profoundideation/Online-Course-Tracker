import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'online-course-tracker-app',
  template: `
  <ul>
    <li *ngFor="let course of courses | async">
      {{ course.name }}
    </li>
  </ul>
  `
})
export class MyApp {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/course');
  }
}
