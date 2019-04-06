import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { HotelsModule } from './modules/hotels.module';
import { ParamInterceptor } from './services/api.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HotelsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
