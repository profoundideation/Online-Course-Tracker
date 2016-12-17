import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAnc-77gd6tRfUzGAiWn0flBoKWVBF1K04',
  authDomain: 'businesscontacts-582f3.firebaseapp.com',
  databaseURL: 'https://businesscontacts-582f3.firebaseio.com',
  storageBucket: 'businesscontacts-582f3.appspot.com'
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
export class AppModule { }
