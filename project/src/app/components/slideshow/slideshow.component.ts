import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'slideshow',
  styleUrls: [ 'slideshow.component.css' ],
  templateUrl: 'slideshow.component.html'
})

export class SlideshowComponent {
  constructor(private auth: AuthService) {
  }
}