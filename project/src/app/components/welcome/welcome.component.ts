import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html'
})

export class WelcomeComponent { 
  constructor(private auth: Auth) {
  }
}
