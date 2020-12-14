import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmListComponent } from './components/farm-list/farm-list.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/farms',
    pathMatch:'full'
  },
  {
    path: 'farms',
    component: FarmListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
