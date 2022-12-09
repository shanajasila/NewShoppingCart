import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchproduct=()=>{
    return this.http.get("http://localhost:8080/viewproduct")
  }
  addproduct=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/addproduct",dataTosend)
  }
  searchproduct=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/searchproduct",dataTosend)
  }
  userregister=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/register",dataTosend)
  }
  userlogin=(dataTosend:any)=>{
    return this.http.post("http://localhost:8080/login",dataTosend)
  }
  viewprofile=(data:any)=>{
    return this.http.post("http://localhost:8080/viewprofile",data)
  }
}
