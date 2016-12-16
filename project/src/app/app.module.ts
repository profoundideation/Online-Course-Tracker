import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
// import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBE0_9cQ8vmZkj-ZYS0RYZcDCcif13uzdA",
    authDomain: "course-tracker-46e40.firebaseapp.com",
    databaseURL: "https://course-tracker-46e40.firebaseio.com",
    storageBucket: "course-tracker-46e40.appspot.com",
  };

@NgModule({
  declarations: [
    AppComponent
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

export class MyApp { }
