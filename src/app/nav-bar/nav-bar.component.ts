import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private userService:UserService) { }

  isLogin:boolean = false;

  ngOnInit() {
    //if(this.userService.isLoggedIn){
      console.log(this.userService.isLoggedIn());
      
      this.isLogin = this.userService.isLoggedIn() ;
    // }

  }

}
