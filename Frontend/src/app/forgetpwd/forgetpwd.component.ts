import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { map } from '../../../node_modules/rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent implements OnInit {
  Forgetform=new FormGroup({
  phNum:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
  otp:new FormControl('',[Validators.required,]),
  pwd:new FormControl('',[Validators.required]),
  cpass:new FormControl('',[Validators.required])
})
pwd:String;
cpwd:string;
phNum:string;
click:number=0;
otp:number;
countDown;
count:number;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
   
}
  
  updateEmployee(user):any{
    document.getElementById('error').style.display='none';
      return this.http.post('http://localhost:61764/api/Swiggy/update',user); 
      }
    
  submitForm(){
   
    console.log(this.Forgetform.value); 
    console.log("....")
    this.pwd=this.Forgetform.controls.pwd.value;
    this.cpwd=this.Forgetform.controls.cpass.value;
    if(this.pwd===this.cpwd){
      
      this.updateEmployee(this.Forgetform.value).subscribe(data=>{
       
        if(data === "success"){
          alert("Updated Successfully");
          this.Forgetform.controls.phNum.setValue('');
          this.Forgetform.controls.pwd.setValue('');
          this.Forgetform.controls.cpass.setValue('');
          this.router.navigateByUrl('/login')
        }
        else{
          alert("Not Valid User!")
        }
      })
    }
    else{
      document.getElementById('error').style.display='block';

    }
  }
  generateOtp(){
    
    if(this.Forgetform.controls.phNum.value ===""){
      alert("Enter Phone Number")
    }
    else{
     
      this.phNum=this.Forgetform.controls.phNum.value;
      this.click=this.click+1;
      return this.http.get<any>('http://localhost:61764/api/Swiggy/Forget' + "/"+ this.phNum ).subscribe(data=>{
        if(data==="success"){
        this.count = 60;
          this.countDown = timer(0,1000).pipe(           
            take(this.count),
            map(()=> --this.count)
         );
        }      })

    }

  }
  submit(){
    this.phNum=this.Forgetform.controls.phNum.value;
    this.otp=this.Forgetform.controls.otp.value;
    return this.http.get<any>('http://localhost:61764/api/Swiggy/Forget' +"/"+this.phNum + "/"+this.otp ).subscribe
    (data=>{if(data ==="success"){
      document.getElementById('otpValid').style.display='block'
      document.getElementById('otpCheck').style.display='none'
    }})
  }
  
}
   
     