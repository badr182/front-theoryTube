import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  isLogin:boolean = false;
  username:string = "";
  

  ngOnInit() {
    //if(this.userService.isLoggedIn){      
      // console.log( this.userService.);
      
    // this.isLogin = this.userService.isLoggedIn() ;
    // }
    if(this.userService.getCurrentUser()){
      this.username = this.userService.getCurrentUser()['first_name'];
    }

    this.userService.currentMessage.subscribe(
      (data) => {
        this.isLogin = this.userService.isLoggedIn();
      })

  }

  logout(){
    this.userService.logout();
    this.isLogin = this.userService.isLoggedIn() ;
    this.router.navigate(['']);
  }

}
