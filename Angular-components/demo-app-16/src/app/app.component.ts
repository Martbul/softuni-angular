import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app-16';

  onOutputFromChild(inputValue:string) {
    console.log('from parent:', inputValue);
    
  }
}
