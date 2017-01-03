import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: [ 'welcome.component.css' ]
})

export class WelcomeComponent { 
  constructor(private auth: Auth) {

    
  }    
}
