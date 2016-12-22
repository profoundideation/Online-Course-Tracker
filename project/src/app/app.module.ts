import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AddformComponent } from './components/addform.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBx1urE0x8JTap584DbpElS_TtZ_ok2RYk",
  authDomain: "onlinecourses-d3ce0.firebaseapp.com",
  databaseURL: "https://onlinecourses-d3ce0.firebaseio.com",
  storageBucket: "onlinecourses-d3ce0.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
