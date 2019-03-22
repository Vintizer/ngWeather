import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { HotelsModule } from './modules/hotels.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HotelsModule, BrowserAnimationsModule, SimpleNotificationsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
