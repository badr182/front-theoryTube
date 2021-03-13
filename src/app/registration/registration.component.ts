import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  formData: NgForm;

  //email:string = "";

  formRegistration:Regsitration = {
    email : "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword:"",
    city: "",
    birth_date: null,
    codePostal:"",
    phone:"",
    address:"",
    role:""
    
  }

  errors = {};
  created:boolean = false;
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit() {
  }

  onSubmit(data){

    // optional: address, code postal , phone 

    // required: email, name, surname, password, date of birth, city 
    // console.log(data.value);
    // this.isEmail(data.value.email);
    // this.isEmpty(data.value.name, "name");
    // this.isEmpty(data.value.surname, "surname");
    // this.isEmpty(data.value.city, "city");
    // this.isEmpty(data.value.typeUser, "typeUser");
    // this.checkPassword(data.value.password,data.value.confirmPassword);

    
    // console.log( this.errors.length );
    //if ( this.errors.length == 0){
      
      //let res = this.userService.regsitration(data.value);      
      // if (!res){
      //   this.errors.push("Email Already exist")
      // }
    //}
    
    //let formData = new FormData();

      //formData.append('email', "badr@badr.com");
      //formData.append('entity', form.value.entity);
    this.userService.regsitration(data.value)
    .subscribe(
      (data ) => {
        // console.log("Success");
        //console.log(data['errors']);
        this.created = true;
        //this.formRegistration = null;
      },
     err =>{
       console.log(err.error.errors);
       this.errors = err.error.errors
       
     }
    ) ;      

  }

  // isEmpty(filed,name:string){
  //   if(filed =="" || filed == undefined){
  //     return this.errors.push(name+" could not be empty");      
  //   }
  // }

  // isEmail(email: string){
  //   const regex = RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  //   if(email =="" || email == undefined){
  //     return this.errors.push("Email could not be empty");      
  //   }
  //   if (!regex.test(email)){
  //     return this.errors.push("PLease enter a valid email");      
  //   }    
  // }

  // checkPassword(password:string, confirmPassword:string){
  //   if(password =="" || password == undefined){
  //     return this.errors.push("Password could not be empty");      
  //   }
  //   if ( password != confirmPassword){
  //     return this.errors.push("Re-enter your password");
  //   }
  // }

}


interface Regsitration{

  email:string;
  first_name:string;
  last_name:string;
  password: string;
  confirmPassword: string;
  city:string;
  birth_date:Date;
  codePostal:string;
  phone:string;
  address:string;
  role:string;

}