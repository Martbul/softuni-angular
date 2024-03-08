import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
// import { MyIfDirective } from './my-if.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegiseComponent } from './regise/regise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';


@NgModule({
  declarations: [
    AppComponent,
    MyRouterLinkDirective,
    // MyIfDirective,
    LoginComponent,
    HomeComponent,
    RegiseComponent,
    MaxCountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //! Module for TEMPLATE driven form
    FormsModule,

    //! modul za reactivni formi
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
