import { Component } from '@angular/core';

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
  read=()=>{
    let data={"name":this.name,"id":this.id,"address":this.address,"phoneno":this.phoneno,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
  }
}
