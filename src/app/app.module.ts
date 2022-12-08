import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchLoginComponent } from './search-login/search-login.component';
import { NavloginComponent } from './navlogin/navlogin.component';

const myRoute :Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"addproduct",
    component:AddProductComponent
  },
  {
    path:"viewproduct",
    component:ViewProductComponent
  },
  {
    path:"searchproduct",
    component:SearchProductComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"registration",
    component:UserRegistrationComponent
  },
  {
    path:"searchlogin",
    component:SearchLoginComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AddProductComponent,
    ViewProductComponent,
    NavBarComponent,
    SearchProductComponent,
    SearchLoginComponent,
    NavloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
