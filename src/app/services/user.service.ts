import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host: string = "http://127.0.0.1:8080";     
  
  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http:HttpClient) { }
  
  getVideos(){
    const url = `${this.host}/api/homevideos`
    //console.log(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json'
        //Authorization: 'my-auth-token'
      })
    };
    return this.http.get(url,httpOptions)
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }


  regsitration(data){    
    const url = `${this.host}/api/register`
    //console.log(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json'
        //Authorization: 'my-auth-token'
      })
    };
    return this.http.post(url,data,httpOptions)
    // return false;
  }

  login(user){
    const url = `${this.host}/api/login`
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json'
        //Authorization: 'my-auth-token'
      })
    };
    return this.http.post(url,user,httpOptions)
    // return false;
  }

  logout(){
    localStorage.removeItem("user");
  }

  isLoggedIn(){
    // const momentExpiration = this.getExpiration();
    const token = localStorage.getItem("user");
    if( token ){
      // return moment().isBefore(this.getExpiration());
      return true;
    }
    return false    
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"))
  }

  
}
