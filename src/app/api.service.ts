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
}
