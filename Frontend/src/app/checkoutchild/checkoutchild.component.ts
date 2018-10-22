import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import{FoodlistComponent} from '../foodlist/foodlist.component'
import {TestService} from '../test.service'
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Location, AsyncPipe } from '../../../node_modules/@angular/common';
import { PageEvent } from '../../../node_modules/@angular/material';
import { Router } from '../../../node_modules/@angular/router';
import {map,take} from 'rxjs/operators'
import { timer } from 'rxjs';
import {DatePipe} from '@angular/common'
@Component({
  selector: 'app-checkoutchild',
  templateUrl: './checkoutchild.component.html',
  styleUrls: ['./checkoutchild.component.css']
})
export class CheckoutchildComponent implements OnInit {
checkList:any;
totalPrice:number=0;
deliveryCharge:number;
Oldaddress:string;
newaddress:string
addTotal=[];items=[];
cartItemsList:any;
url:string;
UserName:string;resName:string;
phoneNum:string;
price:number;
Topay:number;
count:number;Rid:number;
countTimer:number;
countDown;date:number;
itemName:string;
ItemPirce:number;
deliverycharge:number;
Quanity:number;

_fromDate: any = new DatePipe('en-IN').transform(Date.now(),'M/dd/yyyy'+'hh:mm:ss');
  constructor(public test:TestService,private http:HttpClient,private location:Location,private router:Router) { }


  ngOnInit() {
    this.UserName=sessionStorage.getItem("Name");
    
    this.phoneNum=sessionStorage.getItem("PhoneNumber")
    console.log("....phone.."+this.phoneNum)
    if(this.UserName==="undefined"){
      this.UserName="";
     
    }
   
   this.checkList=this.test.cartItems;
    for(var i=0;i< this.checkList.length;i++){
      this.deliveryCharge=this.checkList[i].DeliveryCharge;
      this.totalPrice=this.totalPrice+this.checkList[i].ItemPrice;
    }
    if(this.addTotal.length==0)
    this.addTotal.push({TotalPrice:this.totalPrice,DeliveryCharge:this.deliveryCharge,TotalAmount:this.deliveryCharge+this.totalPrice})
     // if(this.UserName!==""){document.getElementById('sessionTest').style.display='none'}
  }

addressFun(event:any){
  if(event ==="CurrentAdd"){
  this.Oldaddress=sessionStorage.getItem("Address")
   console.log("...",this.Oldaddress)
  }
  if(event ==="NewAdd"){
   this.Oldaddress="";
  }
}
updateEmployeeAdd(newaddress,phoneNum):any{
 
 var indata={ phNum:phoneNum,address:newaddress}
    return this.http.post('http://localhost:61765/api/Swiggy/updateaddress',indata ); 
    }
SaveAddress(){
  this.newaddress=((document.getElementById("address") as HTMLInputElement).value);
   this.updateEmployeeAdd(this.newaddress,this.phoneNum).subscribe(data=>{})
}
locationBack(){
  this.location.back();
}
testFun(){

for(var i=0;i< this.checkList.length;i++){
  this.itemName=this.checkList[i].RecipeName;
  this.ItemPirce=this.checkList[i].ItemPrice
  this.Quanity=this.checkList[i].Quantity
  this.resName=this.checkList[i].RestaurantName
  this.price=this.addTotal[0].TotalPrice
  this.deliverycharge=this.addTotal[0].DeliveryCharge
  this.Topay=this.addTotal[0].TotalAmount
  this.Rid=this.checkList[i].RestaurantId;
  this.items.push({itemName:this.itemName,Price:this.ItemPirce,Quantity:this.Quanity,RestaurantName:this.resName}
  )

 console.log("................")

  if(sessionStorage.getItem("Name")==="0" || this.UserName ===""){
    alert("You have to Login")
    this.router.navigateByUrl('/login')
  }
 else{
  var data={phNum:this.phoneNum,Price:this.price,DeliveryCharge:this.deliverycharge,Topay:this.Topay,itemName:this.itemName,ActualPrice:this.ItemPirce,Quantity:this.Quanity,RestaurantName:this.resName,Status:"Pending",OrderedDate:this._fromDate,RestaurantId:this.Rid}
  var data3={phNum:this.phoneNum,Price:this.price,DeliveryCharge:this.deliverycharge,Topay:this.Topay,Items:this.items.values(),Status:"Pending",OrderedDate:this._fromDate,RestaurantId:this.Rid}
 var d=JSON.stringify(data3)
 console.log(d);
 console.log(data3);
 this.http.post('http://localhost:61764/api/Swiggy/OrderDet',data).subscribe(data=>{
    if(data==="success" || this.count===1){
      this.count++;
      alert("Successfuly Payed")
    }
    if(data==="failure"){
      alert("You have to login")
      this.router.navigateByUrl('/login')
    }
  });
}
}

}
myOrders(){
  this.router.navigateByUrl('/myorders')
}
Payment(){
  this.router.navigateByUrl('/payment')
}
logOut(){
  
  sessionStorage.removeItem("Name")
        sessionStorage.removeItem("PhoneNumber")
        sessionStorage.removeItem("Address")
  this.router.navigateByUrl('/home')

}
}
