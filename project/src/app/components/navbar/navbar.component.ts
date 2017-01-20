import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'navbar',  
  templateUrl: 'navbar.component.html',
  styleUrls: [ 'navbar.component.css' ]
})

export class NavbarComponent {
  constructor(private auth: AuthService) {
  }
}