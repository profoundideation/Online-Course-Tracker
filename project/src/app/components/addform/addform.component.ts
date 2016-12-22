import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AppComponent } from '../../app.component';
// import { HTTP_PROVIDERS } from '@angular/http';

import { Course } from '../../Course';
import { Category } from '../../Category';
import { Status } from '../../Status';

// import { GithubService } from './services/github.service';

@Component({    
  selector: 'addform',
  templateUrl: 'addform.component.html',  
  styleUrls:  ['addform.component.css'],
  // directives:[ReviewComponent],
  providers: [FirebaseService, /* GithubService, HTTP_PROVIDERS */]
})

export class AddformComponent {
  constructor(private _firebaseService: FirebaseService) {} 
}
