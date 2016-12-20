import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Course } from './Course';
import { Category } from './Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  courses:Course[];
  categories:Category[];

  constructor(private _firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this._firebaseService.getCourses()
        .subscribe(courses => {
            //console.log(businesses);
            this.courses = courses;
        });

    this._firebaseService.getCategories()
        .subscribe(categories => {
            //console.log(categories);
            this.categories = categories;
        });
  }
}
