import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
     selector: 'testing',
     styleUrls: ['testing.component.css'],
     templateUrl: 'testing.component.html'
})

export class TestingComponent {
  constructor(private auth: Auth) {
  }
}
