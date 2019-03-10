import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HotelsModule } from "./hotels/hotels.module";
import { SimpleNotificationsModule } from "angular2-notifications";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HotelsModule, BrowserAnimationsModule, SimpleNotificationsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
