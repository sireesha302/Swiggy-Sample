import { Component } from '@angular/core';
import {Location,LocationStrategy, PathLocationStrategy} from '@angular/common';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  providers:[Location,{provide :LocationStrategy,useClass:PathLocationStrategy}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodPanda';
  UserName:string;
  //location:Location;
  constructor(private location:Location,private test:TestService){
    console.log(this.location.path())
  this.UserName=  sessionStorage.getItem("Name")
  console.log(this.UserName)
  if(this.UserName==="undefined"){
    this.UserName=""
  }
    
  }
  locationBack(){
    this.location.back();
  }

}
