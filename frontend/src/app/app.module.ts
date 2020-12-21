import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { FarmFormComponent } from './components/farm-form/farm-form.component';
import { FarmListComponent } from './components/farm-list/farm-list.component';

import { PondFormComponent } from './components/pond-form/pond-form.component';
import { PondListComponent } from './components/pond-list/pond-list.component';

import { FarmsService } from './services/farms.service';
import { PondsService } from './services/ponds.service';

import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FarmFormComponent,
    FarmListComponent,
    PondFormComponent,
    PondListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [
    FarmsService,
    PondsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
