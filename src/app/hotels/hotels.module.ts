import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FavoriteHotelsComponent } from '../components/favorite-hotels/favorite-hotels.component';
import { FilterComponent } from '../components/filter/filter.component';
import { ListComponent } from '../components/list/list.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { LoadingDirective } from '../loading.directive';
import { HotelsComponent } from './hotels.component';
import { StarsComponent } from '../components/stars/stars.component';

@NgModule({
  declarations: [
    ListComponent,
    WeatherComponent,
    ProfileComponent,
    HotelsComponent,
    FilterComponent,
    FavoriteHotelsComponent,
    LoadingDirective,
    StarsComponent
  ],
  imports: [CommonModule, MatCardModule, FontAwesomeModule],
  exports: [HotelsComponent]
})
export class HotelsModule {}
