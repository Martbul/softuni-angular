import { Component } from "@angular/core";

@Component({
   selector: 'app-nav',
   template: '<div id="nav-wrapper">Hi NAV</div>'
   ,
   styles:['#nav-wrapper: {background-color:pink;}'],
})
   
   
export class NavComponent{
   title= 'zdr title'
}