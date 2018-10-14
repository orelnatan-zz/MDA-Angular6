import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../pages/home';
import { SingleAccident } from '../pages/singleAccident';

const routes: Routes = [
    { path: '', component: Home },
    { path: 'Home', component: Home },
    { path: 'Single-Accident', component: SingleAccident }
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})


export class RoutingModule {

    constructor(){


    }

}