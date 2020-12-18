import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FarmFormComponent } from './components/farm-form/farm-form.component';
import { FarmListComponent } from './components/farm-list/farm-list.component';

import { FarmsService } from './services/farms.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FarmFormComponent,
    FarmListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FarmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
