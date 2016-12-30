import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'login',
  styleUrls: [ 'login.component.css' ],
  templateUrl: 'login.component.html'
})

export class LoginComponent { 
  constructor(private auth: Auth) {
  }  
    class loginWithGoogle() {  
      var provider = new firebase.auth.GoogleAuthProvider();  
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
      }).catch(function(error) {
        console.log(error);
      });
    }    
}

