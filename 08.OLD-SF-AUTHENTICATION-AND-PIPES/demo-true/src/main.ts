import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



// //! cold observables - когато някой се събскрайбне има нова инстанция(ex: netflix )
// //! hot observable - когато се събскрайбнеш почваш да получаваш даните от където са стигнали(врзката е споделена за вс събскрайбъри)(ex: cinema)

//! Subject
//   const subj$$ = new Subject() 

//   subj$$.subscribe(console.log)
//   subj$$.subscribe(console.log)

//   subj$$.next(100)


//! BehaviorSubject
// const bSubject$$ = new BehaviorSubject(1)
// bSubject$$.subscribe(console.log);

// setTimeout(()=>{
//   bSubject$$.subscribe(console.log)
//   bSubject$$.next(100);
//   setTimeout(()=>{
//     bSubject$$.subscribe(console.log)
//   },1000)
// },1000)



//! ReplaySubject
// const rSubject$$ = new ReplaySubject(20)
// rSubject$$.next(100)


// rSubject$$.subscribe(console.log)
// rSubject$$.next(200)
// rSubject$$.next(300)
// rSubject$$.subscribe(console.log)




