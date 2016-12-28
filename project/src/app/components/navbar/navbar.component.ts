import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'navbar',
  styleUrls: [ 'navbar.component.css' ],
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
  constructor(private auth: Auth) {
  }
}