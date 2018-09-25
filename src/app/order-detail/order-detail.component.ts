import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { Location } from '../../../node_modules/@angular/common';
import {DatePipe} from '@angular/common'
import { AppComponent } from '../app.component';
import{TestService} from '../test.service'
export interface orderDet {
  RestaurantName:string ;
  itemName:string;
  Price:number;
  Quantity:number;
  Status:string;
  OrderId:number
}


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})

export class OrderDetailComponent implements OnInit {
 
  phNum:string;
  _fromDate:any;
  UserName:string
  orderDetails:orderDet[];
  constructor(private http:HttpClient,private route:Router,private location:Location,private test:TestService) { 
    
  }

  ngOnInit() {
    this.phNum=sessionStorage.getItem("PhoneNumber")
    this.UserName=sessionStorage.getItem("Name");;
    console.log(this.UserName)
    if(this.phNum==="undefined"){
      alert("You Have to Login")
      this.route.navigateByUrl('/login')
    }else{
    this.getOrderDetails(this.phNum).subscribe(data=>this.orderDetails=data);}
  }   

  getOrderDetails(phNum){
    return this.http.get<any>('http://localhost:61765/api/Swiggy/Orders' + "/"+ phNum  )
  }
 
  locationBack(){
    this.location.back();
  }

  myCancel(orderId){
    this._fromDate = new DatePipe('en-IN').transform(Date.now(),'M/dd/yyyy'+'hh:mm:ss');
    this.phNum=sessionStorage.getItem("PhoneNumber")
    var data={phNum:this.phNum,OrderId:orderId,Status:"CancelledPending",CancelledTime:this._fromDate}
    this.http.post('http://localhost:61765/api/Swiggy/OrderDet/Cancelled',data).subscribe(data=>{
      if(data==="success"){
      //  window.location.reload();
        (<HTMLInputElement> document.getElementById("cancel")).disabled = true;
       // this.getOrderDetails(this.phNum)
        alert("Cancelled")
      }
      if(data==="failure"){
        (<HTMLInputElement> document.getElementById("cancel")).disabled = true;
        alert("Cancelled Time is Over")}
      
    })
  }

  openNav() {
      document.getElementById("mySidenav").style.width = "360px"; 
}
 
}
