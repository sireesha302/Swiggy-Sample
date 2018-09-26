import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import  {FoodlistComponent } from './foodlist/foodlist.component'
import { ItemslistComponent} from './itemslist/itemslist.component'
import {HomeComponent} from './home/home.component'
import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'
import {ForgetpwdComponent} from './forgetpwd/forgetpwd.component'
import {CheckoutchildComponent} from './checkoutchild/checkoutchild.component'
import {OrderDetailComponent} from './order-detail/order-detail.component'
import {TrackingorderComponent} from './trackingorder/trackingorder.component'
import {PaymentComponent} from './payment/payment.component'

const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'res/:areaName/:resName', component: FoodlistComponent },
  { path: 'rest/:areaName', component:ItemslistComponent  },
  {path : 'home' ,component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpwd',component:ForgetpwdComponent},
  {path:'checklist',component:CheckoutchildComponent},
  {path:'searchRes',component:HomeComponent},
  {path:'signupPay',component:SignupComponent},
  {path:'loginPay',component:LoginComponent},
  {path:'myorders',component:OrderDetailComponent},
  {path:'trackingOrder',component:TrackingorderComponent},
  {path:'payment',component:PaymentComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[RouterModule]

})
export class AppRoutingModule { }
