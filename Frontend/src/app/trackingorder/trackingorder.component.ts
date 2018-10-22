import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import{TestService} from '../test.service'
export interface orderDet {
  RestaurantName:string ;
  itemName:string;
  Price:number;
  Quantity:number;
  Status:string;
  OrderId:number;
  DeliveryBoy:string;
  BoyphNum:string;
}
@Component({
  selector: 'app-trackingorder',
  templateUrl: './trackingorder.component.html',
  styleUrls: ['./trackingorder.component.css']
})


export class TrackingorderComponent implements OnInit {
phNum:string;
UserName:string;
orderDetails:orderDet[]=[];
  constructor(private route:Router,private http:HttpClient,private test:TestService) { }

  ngOnInit() {
    this.phNum=sessionStorage.getItem("PhoneNumber")
    console.log(this.phNum)
    console.log("........")
    this.UserName=this.test.UserName
    if(this.phNum==="undefined"){
      alert("You Have to Login")
      this.route.navigateByUrl('/login')
    }else{
    this.getOrderDetails(this.phNum).subscribe(data=>this.orderDetails=data);}
    
  }
  getOrderDetails(phNum){
    console.log("////" +phNum)
    return this.http.get<any>('http://localhost:61764/api/Swiggy/Orders' + "/"+ phNum  )
  }
  submit(){
    console.log(this.orderDetails)
  }

}
