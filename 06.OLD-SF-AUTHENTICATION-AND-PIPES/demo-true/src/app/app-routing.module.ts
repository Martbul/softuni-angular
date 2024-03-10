import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },

  //! lazy loading
  {
    path:'lazy',
    loadChildren:()=> import('./lazy/lazy.module').then(m => m.LazyModule )
  }
];

@NgModule({
  //! lazy loading strategies
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
