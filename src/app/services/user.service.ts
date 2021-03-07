import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host: string = "loclhost:8082";
  constructor(private http:HttpClient) { }

  regsitration(data){    
    const url = `${this.host}/registration`
    // this.http.post(url,data)
    return false;
  }

  login(user){
    const url = `${this.host}/login`
    // this.http.post(url,user)
    return false;
  }
}
