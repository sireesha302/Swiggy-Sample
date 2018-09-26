import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import  {Router } from '@angular/router'
import { tap, catchError,map, filter ,startWith} from 'rxjs/operators';
import {fooditems} from '../fooditems'
import { ActivatedRoute } from '@angular/router';
import{TestService} from '../test.service'
import { FormControl } from '../../../node_modules/@angular/forms';
import { Location } from '../../../node_modules/@angular/common';
export interface areaRestaurants{
  AreaName:string;
  RestaurantName:string;
  ImageUrl:string;
  DeliveryType:string;
  DeliveryCharge:number;
  DeliveryTime:number;
}
export interface autoSearchFood{
  ItemName:string;
}

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})


export class ItemslistComponent implements OnInit {
  myControl=new FormControl();
//  private items='http://localhost:61765/api/Restaurent/res';
 // private detailList='http://localhost:61765/api/Restaurent';
 private detailList='http://localhost:61765/api/FoodList';
  private itemsList='http://localhost:61765/api/RestaurantsList';
  private foodie :areaRestaurants[];
  private detailFoodie:fooditems[];
  private tempfoodie;
  private autoSearch:autoSearchFood[]=[];
  filterFood:Observable<string[]>;
  UserName:string;

  constructor(private http:HttpClient,private router :Router,private route: ActivatedRoute,private test:TestService,private location:Location) { }

  ngOnInit() {
   
    this.getRestaurants().subscribe( data => this.foodie =data )
    // this.getDetailRestaurants().subscribe(data=>this.detailFoodie=data)
    this.getDetailItems().subscribe(data=>this.autoSearch=data)
    this.filterFood = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
     this.UserName=sessionStorage.getItem("Name");
     
    // sessionStorage.setItem("Name",this.test.UserName);
   //  sessionStorage.setItem("Address",this.test.address);
     //sessionStorage.setItem("PhoneNumber",this.test.phNum)    
  }
  private _filter(value:string):any[] {
    const filterValue = value.toLowerCase();
    return this.autoSearch.filter(option => option.ItemName.toLocaleLowerCase().includes(filterValue))
  }

  getRestaurants():Observable<areaRestaurants[]>{
    const areaName = this.route.snapshot.paramMap.get('areaName');
    return this.http.get<areaRestaurants[]>(this.itemsList).pipe(map(data =>data.filter(data=>data.AreaName===areaName))) 
}
//* For filtering based on Sidenav*//
 // getDetailRestaurants():Observable<fooditems[]>{
   // const areaName = this.route.snapshot.paramMap.get('areaName');
    //return this.http.get<fooditems[]>(this.detailList).pipe(map(data => data.filter(data =>data.AreaName===areaName)))
  //}

  getDetailItems():Observable<autoSearchFood[]>{
    return this.http.get<autoSearchFood[]>(this.detailList)
  }
  //ForFiltering Baes on Food Items
  getAllRes(){
    document.getElementById('food').style.display='none'
    document.getElementById('foodies').style.display='none'
    document.getElementById('foodBasedRes').style.display='block'
    this.getItemsBasedRes().subscribe(data=>this.detailFoodie=data)
  }
  getItemsBasedRes():Observable<fooditems[]>{
    const foodName=this.myControl.value;
    return this.http.get<fooditems[]>(this.detailList).pipe(map(data=>data.filter(data=>data.ItemName===foodName)))
  }
  myOrders(){
    this.router.navigateByUrl('/myorders')
  }

  logOut(){
        sessionStorage.removeItem("Name")
          sessionStorage.removeItem("PhoneNumber")
          sessionStorage.removeItem("Address")
    this.router.navigateByUrl('/home')
    console.log(sessionStorage.getItem("Name"))
  
  }
  
 

free(event:any){
if(event == "Free"){
  document.getElementById('food').style.display='none'
  document.getElementById('foodBasedRes').style.display='none'
  document.getElementById('foodies').style.display='block'
   this.tempfoodie= this.foodie.filter(options=>options.DeliveryType==event);
}
if(event == "fastDelivery"){
  document.getElementById('food').style.display='none'
  document.getElementById('foodBasedRes').style.display='none'
  document.getElementById('foodies').style.display='block'
   this.tempfoodie= this.foodie.filter(options=>options.DeliveryTime < 30);
}
if(event =="showRes"){
  document.getElementById('food').style.display='none'
  document.getElementById('foodBasedRes').style.display='none'
  document.getElementById('foodies').style.display='block'
  this.tempfoodie=this.foodie;
}
}
show(){
  console.log(this.detailFoodie)
}
locationBack(){
  this.location.back();
}
offers(){
  this.router.navigateByUrl('/res/Kondapur/Hotel Samskruti')
}

 }