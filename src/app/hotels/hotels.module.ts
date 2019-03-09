import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ListComponent } from "../components/list/list.component";
import { WeatherComponent } from "../components/weather/weather.component";
import { ProfileComponent } from "../components/profile/profile.component";
import { HotelsComponent } from "./hotels.component";
import { MatCardModule } from "@angular/material/card";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ListComponent, WeatherComponent, ProfileComponent, HotelsComponent],
  imports: [CommonModule, MatCardModule, FontAwesomeModule],
  exports: [HotelsComponent]
})
export class HotelsModule {}
