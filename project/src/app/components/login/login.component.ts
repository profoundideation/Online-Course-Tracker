import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'login',  
  templateUrl: 'login.component.html', 
  styleUrls: [ 'login.component.css' ]
})

export class LoginComponent /* implements onInit */ {
/*
    login() {
      this.af.auth.login({
        provider: AuthProviders.Google
      });
    }
     
    logout() {
      this.af.auth.logout();
    }
    */
// }
/*
  private errorDuringLogin = false;

  constructor(private auth: Auth, loginService: LoginService, private router: Router) {
    */

 // }  

/*
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
  */
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
  isAuth = false;
  authColor = 'warn';
  user = {};

  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(
      user => this._changeState(user),
      error => console.trace(error)
    );
  }

  login(from: string) {
    this.af.auth.login({
      provider: this._getProvider(from)
    });
  }
  logout() {
    this.af.auth.logout();
  }

  private _changeState(user: any = null) {
    if(user) {
      this.isAuth = true;
      this.authColor = 'primary';
      this.user = this._getUserInfo(user)
    }
    else {
      this.isAuth = false;
      this.authColor = 'warn';
      this.user = {};
    }
  }

  private _getUserInfo(user: any): any {
    if(!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }

  private _getProvider(from: string) {
    switch(from){
      case 'twitter': return AuthProviders.Twitter;
      case 'facebook': return AuthProviders.Facebook;
      case 'github': return AuthProviders.Github;
      case 'google': return AuthProviders.Google;
      case 'email': return AuthProviders.Password;
    }
  }
}
