import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    name: "",
    surname: "",
    password: "",
    confirmPassword:"",
    city: "",
    dateBirth: null,
    codePostal:"",
    phone:"",
    address:"",
    typeUser:""
    
  }

  errors:Array<String> = [];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(data){

    // optional: address, code postal , phone 

    // required: email, name, surname, password, date of birth, city 
    console.log(data.value);
    this.isEmail(data.value.email);
    this.isEmpty(data.value.name, "name");
    this.isEmpty(data.value.surname, "surname");
    this.isEmpty(data.value.city, "city");
    this.checkPassword(data.value.password,data.value.confirmPassword);

    
    console.log(this.errors);
    
  }

  isEmpty(filed,name:string){
    if(filed =="" || filed == undefined){
      return this.errors.push(name+" could not be empty");      
    }
  }

  isEmail(email: string){
    const regex = RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    if(email =="" || email == undefined){
      return this.errors.push("Email could not be empty");      
    }
    if (!regex.test(email)){
      return this.errors.push("PLease enter a valid email");      
    }    
  }

  checkPassword(password:string, confirmPassword:string){
    if(password =="" || password == undefined){
      return this.errors.push("Password could not be empty");      
    }
    if ( password != confirmPassword){
      return this.errors.push("Re-enter your password");
    }
  }

}


interface Regsitration{

  email:string;
  name:string;
  surname:string;
  password: string;
  confirmPassword: string;
  city:string;
  dateBirth:Date;
  codePostal:string;
  phone:string;
  address:string;
  typeUser:string;

}