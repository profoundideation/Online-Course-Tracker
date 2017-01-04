import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { options } from '../auth/auth.options';

declare var Auth0Lock: any;
declare var Auth0: any;
declare var auth0: any;
//
import { Router } from "@angular/router";

export interface User {
    email: string;
    password: string;
    confirmPassword?: string;
}

// Our firebase variable from index.html,..... yes we are using JavaScript Firebase code

declare var firebase: any;
@Injectable()
export class AuthService {
  constructor(private router: Router) {}
  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}

//
@Injectable() 

// Store profile object in auth class
// userProfile: Object;

export class Auth {
    // CONFIG
    FIREBASE_APIKEY = 'AIzaSyBE0_9cQ8vmZkj-ZYS0RYZcDCcif13uzdA';
    FIREBASE_AUTH_DOMAIN = 'course-tracker-46e40.firebaseapp.com';
    FIREBASE_DATABASE_URL = 'https://course-tracker-46e40.firebaseio.com';
    /*
    apiKey: "AIzaSyBE0_9cQ8vmZkj-ZYS0RYZcDCcif13uzdA",
    authDomain: "course-tracker-46e40.firebaseapp.com",
    databaseURL: "https://course-tracker-46e40.firebaseio.com",
    storageBucket: "course-tracker-46e40.appspot.com",
    messagingSenderId: "1060144476385"
    */
    
    /*
    AUTH0_CLIENT_ID = '4XFEYeZgRXhrvplAPCjI3d1yVvQ7M7pl';
    AUTH0_DOMAIN = 'profound.auth0.com';    
    
    lock = new Auth0Lock('4XFEYeZgRXhrvplAPCjI3d1yVvQ7M7pl', 'profound.auth0.com', options);    
    auth0 = new Auth0({ domain : 'profound.auth0.com', clientID: '4XFEYeZgRXhrvplAPCjI3d1yVvQ7M7pl' });    
    */

    //Store profile object in auth class
    userProfile: Object;
    
    constructor() {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        var self = this;
/*
        this.lock.on("authenticated", (authResult:any) => {
            self.lock.getUserInfo(authResult.idToken, function(error:any, profile:any) {                
                if (error) {
                    throw new Error(error);
                }

                localStorage.setItem('profile', JSON.stringify(profile));
                self.userProfile = profile;

                localStorage.setItem('id_token', authResult.idToken);

                // Fetch profile information                
                self.lock.getProfile(authResult.idToken, (error, profile) => {
                    if (error) {                        
                        alert(error);
                        return;
                    }
                });

            });
        }); */

    }

    public login() {

        // this.lock.show({
        //     }, function(err, profile, id_token) {
        //       localStorage.setItem('profile', JSON.stringify(profile));
        //       var options = {
        //         id_token : id_token,
        //         api : 'firebase',
        //         scope : 'openid name email displayName',
        //         target: 'profound.auth0.com'
        //       };
        //       auth0.getDelegationToken(options, function(err, result){
        //         if(!err) {
        //           firebase.auth().signInWithCustomToken(result.id_token).catch(function(error) {
        //             console.log(error);
        //           });
        //         }
        //       });
        //     }, function(error) {
        //       alert(error);
        //     });        
    }

    public authenticated() {
        return tokenNotExpired();
    }

    public logout() {    
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');        
        this.userProfile = undefined;
    }      
}