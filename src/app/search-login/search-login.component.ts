import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-login',
  templateUrl: './search-login.component.html',
  styleUrls: ['./search-login.component.css']
})
export class SearchLoginComponent {

  name=""
  searchData:any=[]
  constructor(private api:ApiService){
    this.api.fetchproduct().subscribe(
      (response:any)=>{
        this.searchData=response
      }
    )
  }

  readvalue=()=>{
    let data={"name" :this.name}
    console.log(data)
    this.api.searchproduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid Product name")
        }
        else{
          this.searchData=response
        }
      }
    )
  }
}
