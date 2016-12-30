import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
// import { } angular-ui
// import { } angular-material
// import { } angular-aria
// import { } auth0-angular

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
          WelcomeComponent,
          CoursesComponent,
          ProfileComponent,
          TestingComponent,
          FooterComponent
     ],
     imports: [
          BrowserModule,
          FormsModule,
          HttpModule,
          routing,
          AngularFireModule.initializeApp(firebaseConfig)
     ],
     providers: [appRoutingProviders, AUTH_PROVIDERS, Auth, AuthGuard],
     bootstrap: [AppComponent]
})

export class AppModule { }