import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { options } from '../auth/auth.options';

declare var Auth0Lock: any;

@Injectable() 

// Store profile object in auth class
// userProfile: Object;

export class Auth {
    lock = new Auth0Lock('4XFEYeZgRXhrvplAPCjI3d1yVvQ7M7pl', 'profound.auth0.com', options);

    //Store profile object in auth class
    userProfile: Object;

    constructor() {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        var self = this;

        this.lock.on("authenticated", (authResult:any) => {
            self.lock.getProfile(authResult.idToken, function(error:any, profile:any) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                self.userProfile = profile;

                localStorage.setItem('id_token', authResult.idToken);

                // Fetch profile information                
                self.lock.getProfile(authResult.idToken, (error, profile) => {

                    if (error) {
                        // Handle error
                        alert(error);
                        return;
                    }

                });
            });
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
        this.userProfile = undefined;
    }      
}