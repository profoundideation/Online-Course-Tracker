import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
     selector: 'user',
     styleUrls: ['user.component.css'],
     templateUrl: 'user.component.html'
})

export class UserComponent {
  constructor(private auth: Auth) {
  }
}
