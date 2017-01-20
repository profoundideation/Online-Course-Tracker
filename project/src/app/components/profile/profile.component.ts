import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'profile',
  styleUrls: [ 'profile.component.css' ],
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {   
  profile: any;
  constructor(private auth: AuthService) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }
  
}
