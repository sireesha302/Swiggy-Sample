import { Component, OnInit, AfterViewInit } from '@angular/core';
import {fooditems} from '../fooditems'
import {HttpClient,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs'
import { find, filter, tap ,map} from '../../../node_modules/rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {TestService} from '../test.service'
import {LocationStrategy,PathLocationStrategy,Location} from '@angular/common'
@Component({
  selector: 'app-foodlist',

  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit{

 // private items='http://localhost:61765/Api/Restaurent';
 private itemsList='http://localhost:61765/api/FoodList';
  private foodie :fooditems[];
  private tempfoodie=this.foodie;
 
  errorMessage:string;
  filterOption:string;
  deliveryTime:string;
  update:string;
  cartItems=[];
  index:number;

  value:any;
  cartPrice:number;
  OriPrice:number;
  quant:number;
  inputText:number;
  count:number=0;
  click:number=0;
  message='hai';
  UserName:string;
 // location:Location
  

  constructor(private http:HttpClient,private route: ActivatedRoute,public test:TestService,private router:Router,private location:Location) { }

  ngOnInit() {
    
    const resName = this.route.snapshot.paramMap.get('resName');
    this.UserName=sessionStorage.getItem("Name");
  
    if(this.UserName==="undefined"){
      this.UserName="";
    }
    this.getRestaurantItems(resName). subscribe(
      data => this.foodie =data)
  }
  getRestaurantItems(resName:string): Observable<fooditems[]> {
    
  return this.http.get<fooditems[]>(this.itemsList).pipe(map(data =>data.filter(data=>data.RestaurantName===resName)))  
  }

 

  //Filtering based on Side Options
  free(event:any){
  
    if(event == "Veg"){
     document.getElementById('food').style.display='none'
      document.getElementById('foodies').style.display='block'
       this.tempfoodie= this.foodie.filter(options=>options.ItemType==event);
      
   //    this.offers=this.foodie.filter(options=>options.ItemType==event)
     //  console.log(this.offers)
  
    }
    if(event == "Snacks"){
      document.getElementById('food').style.display='none'
      document.getElementById('foodies').style.display='block'
       this.tempfoodie= this.foodie.filter(options=>options.ItemType==event);
    }
    if(event == "Drink"){
      document.getElementById('food').style.display='none'
      document.getElementById('foodies').style.display='block'
       this.tempfoodie= this.foodie.filter(options=>options.ItemType==event);
    }
    if(event=="showAll"){
      const resName = this.route.snapshot.paramMap.get('resName');
     document.getElementById('food').style.display='none';
      document.getElementById('foodies').style.display='block';
     this.getRestaurantItems(resName). subscribe(data => this.foodie =data)
    this.tempfoodie=this.foodie;
    }
    }
    //Cart Functionality
cartFun(foodName:String,price:number,charge:number,plate:number,Rid:number){  
  const resName = this.route.snapshot.paramMap.get('resName');
  var btnfun=document.getElementById('endNav');
    sessionStorage.setItem("OriPrice",price.toString())
    sessionStorage.setItem("Quantity",plate.toString())
  if(this.cartItems.length===0){
    this.click=plate;
    this.cartItems.push({RecipeName:foodName,ItemPrice:price,DeliveryCharge:charge,Quantity:this.click,RestaurantName:resName,RestaurantId:Rid})
    btnfun.style.display='block'
  }
  else{
  this.update="false";
  for(var i=0;i<this.cartItems.length;i++){
    if(this.cartItems[i].RecipeName===foodName){
      price=price+this.cartItems[i].ItemPrice;
      plate=plate+this.cartItems[i].Quantity;
      this.cartItems[i].ItemPrice=price;
      this.cartItems[i].Quantity=plate;
      this.update="true";
      return this.update;
    }
  }
  if(this.update==="false"){
    this.click=1;
    this.cartItems.push({RecipeName:foodName,ItemPrice:price,DeliveryCharge:charge,Quantity:plate,RestaurantName:resName,RestaurantId:Rid})
  }
}
}
removecartFun(foodName:String,price:number,charge:number){
  for(var i=0;i<this.cartItems.length;i++){
    if(this.cartItems[i].RecipeName===foodName){
      if((this.cartItems[i].ItemPrice - price)>=0){
      price=this.cartItems[i].ItemPrice-price;
      
      this.cartItems[i].ItemPrice=price;
    this.cartItems[i].Quantity= this.cartItems[i].Quantity-parseInt(sessionStorage.getItem("Quantity"))  
    } 
      if(price===0){
        this.index=this.cartItems[i].index
        //this.cartItems.pop();
        this.cartItems.splice(this.index,1)
      }   
      this.update="true";
      return this.update;
    }
  }
}

myFun(price:number,Quantity:number,search:string,foodName:string){
  this.cartPrice=price;
  this.OriPrice=parseInt(sessionStorage.getItem("OriPrice"))
 if(search===""){
   search="0";
 }
 this.quant=parseInt(search);
 
//  this.inputText=this.OriPrice*this.quant+this.cartPrice

for(var i=0;i<this.cartItems.length;i++){
 if(this.cartItems[i].RecipeName===foodName){ 
   this.cartItems[i].ItemPrice=this.OriPrice*this.quant+this.cartPrice;
    this.cartItems[i].Quantity=Quantity+this.quant;
  
  }

}
}

show(){
this.test.cartItems=this.cartItems;
console.log(this.cartItems)
  this.router.navigate(['checklist'])
}
locationBack(){
  console.log("....")
this.location.back()
}
myOrders(){
  this.router.navigateByUrl('/myorders')
}

mouseenter(){
 document.getElementById("tooltip").style.display='block'
}
mouseleave(){
  document.getElementById("tooltip").style.display='none'
}

logOut(){
  
  sessionStorage.removeItem("Name")
        sessionStorage.removeItem("PhoneNumber")
        sessionStorage.removeItem("Address")
  this.router.navigateByUrl('/home')

}
offers(){
  this.router.navigateByUrl('/res/Kondapur/Hotel Samskruti')
}

}


