import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email=""
  password=""
  searchuser:any=[]

  constructor(private api:ApiService,private route:Router){}
  readvalue=()=>{
    let data={"email":this.email,"password":this.password}
    console.log(data)
    this.api.userlogin(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid email or password")
          this.email=""
          this.password=""
        }
        else{
          this.searchuser=response;
          this.route.navigate(['/searchlogin'])
        }
     }
    )
}
}

