import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'home',
  styleUrls: [ 'home.component.css' ],
  templateUrl: 'home.component.html'
})

export class HomeComponent { 
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

