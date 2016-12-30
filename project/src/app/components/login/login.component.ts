import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',  
  templateUrl: 'login.component.html', 
  styleUrls: [ 'login.component.css' ]
})

export class LoginComponent implements onInit { 

  private errorDuringLogin = false;

  constructor(private auth: Auth, loginService: LoginService, private router: Router) {
  }  

  ngOnInit() {
    console.log("starting Login Page. Authenticated is: " + this.loginService.isAuthenticated);

    if (this.loginService.isAuthenticated) {
      this.router.navigate(['/welcome']);
    } else {
      this.loginService.login().then((authState) => {

        if (authState && authState.uid) {
          console.log("Login Successful for " + this.authState.auth.displayName);
            this.router.navigate(['/members']);
          } else {
            this.errorDuringLogin = true;
          }      
        })
    };
  }
/*
    class loginWithGoogle() {  
      var provider = new firebase.auth.GoogleAuthProvider();  
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
      }).catch(function(error) {
        console.log(error);
      });
    }    
}

*/