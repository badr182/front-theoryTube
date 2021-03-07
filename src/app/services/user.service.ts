import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host: string = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  regsitration(data){    
    const url = `${this.host}/api/registration`
    //console.log(data);
    
    return this.http.post(url,data)
    // return false;
  }

  login(user){
    const url = `${this.host}/login`
    // this.http.post(url,user)
    return false;
  }
}
