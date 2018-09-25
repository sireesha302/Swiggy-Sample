import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import {MatRadioModule,MatButtonModule,MatListModule,MatToolbarModule ,MatFormFieldModule, MatSidenavModule,MatInputModule,MatSelectModule,MatOptionModule,MatIconModule,MatCardModule, MatGridListModule, MatBadgeModule, MatRadioGroup, MatRadioButton, MatMenuModule, MatTooltipModule, MatTooltip, MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from '@angular/material';
import { ItemslistComponent } from './itemslist/itemslist.component'
import {CommonModule } from '@angular/common'
import  {FormsModule} from '@angular/forms'
import { HttpClientInMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { NumberPickerModule } from '@retailify/ngx-mat-numberpicker';
import { CheckoutchildComponent } from './checkoutchild/checkoutchild.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { TrackingorderComponent } from './trackingorder/trackingorder.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemslistComponent,
    FoodlistComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ForgetpwdComponent,
    CheckoutchildComponent,

    OrderDetailComponent,

    TrackingorderComponent,

    PaymentComponent
   
  ],
  imports: [
    BrowserModule,NumberPickerModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,FormsModule,MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,MatCardModule,
    MatOptionModule, MatSidenavModule,MatToolbarModule,MatListModule,MatFormFieldModule,MatMenuModule,
    MatInputModule,MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,MatGridListModule,MatBadgeModule,MatRadioModule,MatDatepickerModule,
    
    
   // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation :false})
  ],
  exports : [MatDatepickerModule,MatTooltipModule,MatMenuModule,MatRadioModule,MatBadgeModule,MatGridListModule,MatAutocompleteModule,ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatCardModule,MatToolbarModule,MatListModule, MatSidenavModule,MatIconModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule,MatSelectModule,MatOptionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

