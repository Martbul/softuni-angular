import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';


function add(a:number |string,b:number |string): number|string {
  return (a) as any +(b) as any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-true';
  obj={
    scores:[1,2,3,4,5,6,7,8,9]
    
  }
constructor(private userService:UserService){}
  add = add;

  private scores:number[] = []
  private result = 0;


  $time = interval(1000).pipe(
    map(()=> new Date())
  )


  myPromise = new Promise((res)=>{
    setTimeout(()=>{
      res('hello')
    }, 5000)
  })

  getScores(obj:{scores:number[]}){
    if(this.scores !== obj.scores){
       this.result = obj.scores.reduce((acc,curr) => acc+curr)
  this.scores = obj.scores
       return this.result
      }
      return this.result
    
  }

  addProp(){
    (this.obj as any)['test' ]=500
  }


  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next:(users)=> console.log(users),
      error:(err) => console.log(err)
      
      
    })
  }
}
