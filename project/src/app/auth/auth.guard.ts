import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Auth } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
     constructor(private auth: Auth, private router: Router) {}
     canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
          if (this.auth.authenticated()) {
               // console.log('AUTH0 GUARD PASSED');
               return true;
          } else {
               // console.log('BLOCKED BY AUTH0 GUARD');
               this.router.navigate(['/login']);
               return false;
          }
     }
}