import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host: string = "http://localhost:8080";
  constructor(private http:HttpClient) { }

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

  isLoggedIn(){
    // const momentExpiration = this.getExpiration();
    const token = localStorage.getItem("user");
    if( token ){
      // return moment().isBefore(this.getExpiration());
      return true;
    }
    return false
  }
}
