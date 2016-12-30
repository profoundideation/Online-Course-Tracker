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
     console.log("local storage");
    for (let i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }
    
    console.log("session storage");
    for (let i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
    }
  }
  /*
  display() {
    console.log("local storage");
    for (i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }
    
    console.log("session storage");
    for (i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
    }
  }
  */

}
