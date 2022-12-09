import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent {
    name= ""
    address =""
    phoneno= ""
    email =""
    password=""
    confirmpassword=""

  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    let data:any={"id":this.userId}
    this.api.viewprofile(data).subscribe(
      (response)=>{
        console.log(response)
        this.data=response

      }
    )
  }
  data:any=[]

}
