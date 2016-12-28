import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { options } from '../auth/auth.options';

declare var Auth0Lock: any;

@Injectable() 

export class Auth {
    lock = new Auth0Lock('4XFEYeZgRXhrvplAPCjI3d1yVvQ7M7pl', 'profound.auth0.com', options);

    constructor() {
        this.lock.on("authenticated", (authResult:any) => {
            this.lock.getProfile(authResult.idToken, function(error:any, profile:any) {
                if (error) {
                    throw new Error(error);
                }                
                localStorage.setItem('profile', JSON.stringify(profile));                
                localStorage.setItem('id_token', authResult.idToken);
            })
        });
    }

    public login() {        
        this.lock.show();
    }

    public authenticated() {
        return tokenNotExpired();
    }

    public logout() {    
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }      
}