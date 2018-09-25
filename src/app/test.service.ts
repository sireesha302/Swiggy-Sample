import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
   cartItems:any;
   phNum:string;
   pwd:string;
   address:string;
   UserName:string;
   RestaurantName:string;
   items:any;
  
  constructor() { }
}

