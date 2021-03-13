import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  routeURL: string;

  constructor(private userService: UserService, private router: Router) { }
  
//   canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
//     return new Promise((resolve, reject) => {
//     //   this.authService.redirectUrl = state.url
 

//     //   if (this.authService.isLoggedIn()) {
 
//     //     return resolve(true);
//     //   }else{
//     //     this.router.navigate(['/login']);
//     //     return resolve(false);
//     //   }

//     });


//   }
  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // here we check if user is logged in or not
    // the authService returs user object, or
    // it returns undefined/null when user is not logged in

    // SINCE OUR 'authService.user' IS OF TYPE 'Observable'
    // WE MUST USE 'subscribe' TO GET VALUE OF 'user'
    return new Promise((resolve, reject) => {

 
    //   this.authService.redirectUrl = state.url     
      if (this.userService.isLoggedIn()) { 
        return resolve(true);
      }else{
        this.router.navigate(['/login']);
        return resolve(false);
      }

    });

  }

  // checkLogin(url: string): true | UrlTree {

  //   if (this.authService.isLoggedIn) { return true; }

  //   // Store the attempted URL for redirecting
  //   this.authService.redirectUrl = url;

  //   // Redirect to the login page
  //   return this.router.parseUrl('/login');
  // }

}
