import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  id=""
  name=""
  category=""
  description=""
  price=""
  image=""
  constructor(private api:ApiService){}
 readValues=()=>{
  let data={"price":this.price,"id":this.id,"name":this.name,"category":this.category,"description":this.description,"image":this.image }
  console.log(data)
  this.api.addproduct(data).subscribe(
    (response:any)=>{
      console.log(response)

      if(response.status=="success"){
        alert("Product Added successfully")
        this.name=""
        this.category=""
        this.description=""
        this.image=""
        this.price=""
      }else{
        alert("something went wrong")
      }
    }
  )
 }
}
