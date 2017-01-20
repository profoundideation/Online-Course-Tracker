import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

declare var i: any;

@Component({
  selector: 'members',
  styleUrls: [ 'members.component.css' ],
  templateUrl: 'members.component.html'
})

export class MembersComponent {
  constructor(private auth: Auth) {
  }  
}
