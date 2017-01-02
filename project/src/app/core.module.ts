import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

const firebaseConfig = {
  apiKey: "AIzaSyBE0_9cQ8vmZkj-ZYS0RYZcDCcif13uzdA",
  authDomain: "course-tracker-46e40.firebaseapp.com",
  databaseURL: "https://course-tracker-46e40.firebaseio.com",
  storageBucket: "course-tracker-46e40.appspot.com"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  exports: [
    BrowserModule,
  ]
})

export class CoreModule { }