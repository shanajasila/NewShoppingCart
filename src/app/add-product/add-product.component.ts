import { Component } from '@angular/core';

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
 readValues=()=>{
  let data={"price":this.price,"id":this.id,"name":this.name,"category":this.category,"description":this.description,"image":this.image }
  console.log(data)
 }
}
