import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
  constructor(private auth: Auth) {
  }
}