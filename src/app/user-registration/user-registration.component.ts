import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  id=""
  name=""
  address=""
  phoneno=""
  email=""
  password=""
  confirmpassword=""
  constructor(private api:ApiService){}
  read=()=>{
    let data={"name":this.name,"id":this.id,"address":this.address,"phoneno":this.phoneno,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
    this.api.userregister(data).subscribe(
      (response:any)=>{
        console.log(response)

        if(response.status=="success"){
          alert("User Registerd successfully")
          this.name=""
          this.address=""
          this.email=""
          this.phoneno=""
          this.password=""
          this.confirmpassword=""
        }else{
          alert("something went wrong")
        }
      }
    )
  }
}
