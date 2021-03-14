import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = ""
  error:string;

  message:string;
  subscription: Subscription;
  

  constructor(private userService:UserService,
    private router:Router) { }

    newMessage() {
      this.userService.changeMessage("your are authenticated")
    }
  ngOnInit() {
  }

  onSubmit(data){
    this.error = "";
    // console.log(data.value);
    if ( this.email != "" && this.password != ""){
      this.userService.login(data.value).subscribe(
        (data) => {

          //console.log(data['data']);
          // write in localstorage
          localStorage.setItem("user", JSON.stringify(data["data"]));
          this.newMessage();
          // redirection 
          this.router.navigate(["/user"]);
        },
        err =>{
          //console.log(err.error.error);
          this.error = err.error.error
        }
      )
    }
    
  }

}
