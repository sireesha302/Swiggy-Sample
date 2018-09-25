import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { map, tap } from '../../../node_modules/rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';
import { TestService } from '../test.service';
import {Location,LocationStrategy,PathLocationStrategy} from '@angular/common'


export interface login{
  phNum:string;
  pwd:String;
}


@Component({
  selector: 'app-login',
  providers:[Location,{provide :LocationStrategy,useClass:PathLocationStrategy}],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  loginForm=new FormGroup({
  phNum:new FormControl(''),
  pwd:new FormControl('')
  })
  
  loginFilter:login[]=[];
  timeLeft: number = 60;
  interval;
  msg:any
  constructor(private http:HttpClient,private route:Router,private test:TestService,private location:Location) { }
  ngOnInit() {
    
  }
  
  getValidUser(phNum,pwd){
    this.msg='http://localhost:61765/api/Swiggy' + "/"+ phNum  + "/"+pwd;
    console.log(this.msg)
    return this.http.get<any>('http://localhost:61765/api/Swiggy' + "/"+ phNum  + "/"+pwd)
  }
submit(){

  this.test.phNum=this.loginForm.controls.phNum.value;
  this.test.pwd=this.loginForm.controls.pwd.value;
  this.getValidUser(this.test.phNum,this.test.pwd). subscribe(
    data => {if(data.length===1){
      this.test.address=data[0].address;
      this.test.UserName=data[0].UserName;
      this.loginForm.controls.phNum.setValue('');
      this.loginForm.controls.pwd.setValue('');
    
      if(this.location.path()==='/login'){
        sessionStorage.setItem("Name",this.test.UserName)
        sessionStorage.setItem("PhoneNumber",this.test.phNum)
        sessionStorage.setItem("Address",this.test.address)
      this.route.navigateByUrl('/searchRes')
         window.location.reload();
    }
      if(this.location.path()==='/loginPay'){
        sessionStorage.setItem("Name",this.test.UserName)
        sessionStorage.setItem("PhoneNumber",this.test.phNum)
        sessionStorage.setItem("Address",this.test.address)
        this.route.navigateByUrl('/checklist')
      }
    }
    else{
      alert("Invalid Details")
    }
    })
   
  }
  

 
  }


