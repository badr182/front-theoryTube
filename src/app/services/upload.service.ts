import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  private host: string = "http://127.0.0.1:8080";
  constructor(private http:HttpClient) { }
  
  
  upload(data){
    const url = `${this.host}/api/upload`
    //console.log(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        //Authorization: 'my-auth-token'      
      })
    };
    return this.http.post(url,data,httpOptions)
  }


}
