import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmListComponent } from './components/farm-list/farm-list.component';
import { FarmFormComponent } from './components/farm-form/farm-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/farms',
    pathMatch:'full'
  },
  {
    path: 'farms',
    component: FarmListComponent
  },
  {
    path: 'farms/add',
    component: FarmFormComponent
  },
  {
    path: 'farms/edit/:id',
    component: FarmFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
