import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { AuthService } from './services/auth.service';
import 'rxjs/add/operator/map';

// import { Course } from './models/Course';
import { Category } from './models/Category';
import { Status } from './models/Status';
import { UserCourse } from './models/UserCourse';
import { AllCourses } from "./models/AllCourses";

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: [ './app.component.css' ],
     providers: [ FirebaseService ]
})

export class AppComponent implements OnInit {
    // isAuth = false;
    authColor = 'warn';
    user = {};
    allcourses: AllCourses[];
    categories: Category[];
    // statuses: Status[];
    usercourses: UserCourse[];
    profile: any;
    appState: string;
    activeKey: string;
    activeSchool: string;
    activeName: string;
    activeUrl: string;
    activeCategory: string;
    activeStatus: string;
    
    constructor(private _firebaseService: FirebaseService, /* private auth: Auth, */ public af: AngularFire, private authService: AuthService
      ) {
        this.af.auth.subscribe(user => {
          if(user) {
            // user logged in
            this.user = user;
          }
          else {
            // user not logged in
            this.user = {};
          }
          });
      }      

    ngOnInit() {
          /*
              this._firebaseService.getUserCourses()
                .subscribe(usercourses => {
                  this.usercourses = usercourses;
                });
          */
          /*
              this._firebaseService.getCourses()
                .subscribe(courses => {
                  this.courses = courses;
              });
          */

/*

          this._firebaseService.getCategories()
               .subscribe(categories => {
                    //console.log(categories);
                    this.categories = categories;

          this._firebaseService.getStatuses()
               .subscribe(statuses => {
                    // console.log(categories);
                    // this.statuses = statuses;
               });
          
          this._firebaseService.getUserCourses()
               .subscribe(users => {
                    var list = []
                    this.profile = JSON.parse(localStorage.getItem('profile'));
                    for (var i in users) {
                         if (users[i].name == this.profile.given_name) {
                              list.push(users[i]["usercourses"]);
                         }
                    }
                    //console.log('list : ', list);
                    this.usercourses = list;
               });

*/

        // this.

/*
        firebaseAuthConfig({
          method: AuthMethods.Popup
        })
        */
     }
  /*
    firebaseAuthConfig({
        method: AuthMethods.Redirect
      }); 
      
  */
      
    login(from: string) {
      this.af.auth.login({
        /*
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
        */
        provider: AuthProviders.Password,
        method: AuthMethods.Password
        // method: AuthMethods.Redirect
      });
      console.log("Logging In");
    }
     
    logout() {
      this.af.auth.logout();
      console.log("Logged Out");
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
    }
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();

  }

}