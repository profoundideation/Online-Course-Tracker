import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'slideshow',
  styleUrls: [ 'slideshow.component.css' ],
  templateUrl: 'slideshow.component.html'
})

export class SlideshowComponent {
  constructor(private auth: Auth) {
  }
}