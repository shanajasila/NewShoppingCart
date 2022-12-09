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
        this.email=""
          this.password=""
  
        if(response.status=="success"){
          let userId=response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          this.route.navigate(['/searchlogin'])
          
        }
        else{
         alert(response.message)
        }
     }
    )
}
}

