import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddformComponent } from './components/addform/addform.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
// import { EditformComponent } from './components/editform/editform.component';
// import { ExtendsectionComponent } from './components/extendsection/extendsection.component';

import { Auth } from './services/auth.service';
import { AuthGuard } from './auth.guard';

export const firebaseConfig = {
  apiKey: "AIzaSyBx1urE0x8JTap584DbpElS_TtZ_ok2RYk",
  authDomain: "onlinecourses-d3ce0.firebaseapp.com",
  databaseURL: "https://onlinecourses-d3ce0.firebaseio.com",
  storageBucket: "onlinecourses-d3ce0.appspot.com"
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
    FooterComponent     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing, 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ appRoutingProviders, AUTH_PROVIDERS, Auth, AuthGuard ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
