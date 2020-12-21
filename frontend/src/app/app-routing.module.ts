import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmListComponent } from './components/farm-list/farm-list.component';
import { FarmFormComponent } from './components/farm-form/farm-form.component';

import { PondListComponent } from './components/pond-list/pond-list.component';
import { PondFormComponent } from './components/pond-form/pond-form.component';

const routes: Routes = [
  
  { path: 'farms', component: FarmListComponent },
  { path: 'farms/add', component: FarmFormComponent },
  { path: 'farms/edit/:id', component: FarmFormComponent },
  { path: 'ponds', component: PondListComponent },
  { path: 'ponds/add', component: PondFormComponent },
  { path: 'ponds/edit/:id', component: PondFormComponent },
  { path: '', redirectTo:'/farms', pathMatch:'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
