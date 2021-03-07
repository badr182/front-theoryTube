import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = ""
  errr:string = ""  
  
  
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit(data){

    // console.log(data.value);
    if ( this.email != "" && this.password != ""){
      this.userService.login(data.value)
    }
    
  }

}
