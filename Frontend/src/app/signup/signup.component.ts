import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, EmailValidator } from '../../../node_modules/@angular/forms';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { map } from '../../../node_modules/rxjs/operators';
import {Location,LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  providers:[Location,{provide :LocationStrategy,useClass:PathLocationStrategy}],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  pwd:String;
  cpwd:string;
  UserName:string;
  emailId:string;
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

  Signupform = new FormGroup
  ({
    UserName: new FormControl('',[Validators.required]),
    phNum: new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
    pwd:new FormControl('',[Validators.required]),
    emailId:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    address:new FormControl('',[Validators.required]),
    cpass:new FormControl('',[Validators.required])
  });
  


  constructor(private http:HttpClient,private location:Location,private router:Router) { }

  ngOnInit() {
   
  }

  submit(){
    console.log(this.Signupform.value);
  this.pwd=this.Signupform.controls.pwd.value;
  this.cpwd=this.Signupform.controls.cpass.value;
     
    if(this.pwd === this.cpwd && this.Signupform.valid){     
      this.saveEmployee(this.Signupform.value).subscribe(data=>{
        console.log(data);
        console.log("...............")
        if(data==="success"){
          alert("Submitted Succesfully");
          this.router.navigateByUrl('/login')
       

        }
      }) 
    }
     
   if(this.pwd !== this.cpwd){
      document.getElementById('error').style.display='block';
      console.log("dos not match")
    }
    if(this.Signupform.invalid){
      alert("Invalid")
    }
  
}
  saveEmployee(employee){
    document.getElementById('error').style.display='none';
    console.log(employee);
    
    return this.http.post('http://localhost:61764/api/Swiggy/post',employee) ; 
  }
}
