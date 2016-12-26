import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})

export class WelcomeComponent { 
  constructor(private auth: Auth) {
  }    
}
