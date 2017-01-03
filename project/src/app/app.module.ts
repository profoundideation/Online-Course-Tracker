import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
// import { } angular-ui
// import { } angular-material
// import { } angular-aria
// import { } auth0-angular

// MATERIAL DESIGN MODULES
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

export let MD_MODULES: any = [
  MdToolbarModule,
  MdButtonModule,
  MdCardModule
];

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddformComponent } from './components/addform/addform.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TestingComponent } from './components/testing/testing.component';
import { MembersComponent } from './components/members/members.component';
import { LoginComponent } from './components/login/login.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

/* Feature Modules */
import { CoreModule }       from './core.module';

// import { EditformComponent } from './components/editform/editform.component';
// import { ExtendsectionComponent } from './components/extendsection/extendsection.component';

import { Auth } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';

export const firebaseConfig = {
     apiKey: "AIzaSyBE0_9cQ8vmZkj-ZYS0RYZcDCcif13uzdA",
     authDomain: "course-tracker-46e40.firebaseapp.com",
     databaseURL: "https://course-tracker-46e40.firebaseio.com",
     storageBucket: "course-tracker-46e40.appspot.com",
};

@NgModule({
     declarations: [
          AppComponent,
          AddformComponent,
          NavbarComponent,
          HeaderComponent,
          HomeComponent,
          LoginComponent,
          WelcomeComponent,
          CoursesComponent,
          ProfileComponent,
          TestingComponent,
          MembersComponent,
          SlideshowComponent,
          FooterComponent
     ],
     imports: [          
          BrowserModule,
          FormsModule,
          HttpModule,
          routing,      
          AngularFireModule.initializeApp(firebaseConfig, {
              provider: AuthProviders.Google,
              method: AuthMethods.Popup
        })
     ],
     providers: [appRoutingProviders, AUTH_PROVIDERS, Auth, AuthGuard],
     bootstrap: [AppComponent]
})

export class AppModule { }