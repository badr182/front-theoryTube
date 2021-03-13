import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit() {
  }

  onSubmit(data){
    this.error = "";
    // console.log(data.value);
    if ( this.email != "" && this.password != ""){
      this.userService.login(data.value).subscribe(
        (data) => {
          console.log(data);
          // write in localstorage
          localStorage.setItem("user","XCFGE");
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
