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

const myRoute :Routes=[
  {
    path:"",
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
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
