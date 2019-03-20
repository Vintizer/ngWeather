import { FilterService } from './../services/filter.service';
import { HotelTextPipe } from './../pipes/hotel-text.pipe';
import { StarPipe } from './../pipes/star.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FavoriteHotelsComponent } from '../components/favorite-hotels/favorite-hotels.component';
import { FilterComponent } from '../components/filter/filter.component';
import { ListComponent } from '../components/list/list.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { StarsComponent } from '../components/stars/stars.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { FavoriteService } from '../services/favorite-service.service';
import { HotelsComponent } from './hotels.component';
import { LoadingDirective } from './loading.directive';

@NgModule({
  declarations: [
    ListComponent,
    WeatherComponent,
    ProfileComponent,
    HotelsComponent,
    FilterComponent,
    FavoriteHotelsComponent,
    StarsComponent,
    LoadingComponent,
    LoadingDirective,
    StarPipe,
    HotelTextPipe
  ],
  imports: [CommonModule, MatCardModule, FontAwesomeModule],
  exports: [HotelsComponent],
  entryComponents: [LoadingComponent],
  providers: [FavoriteService, FilterService]
})
export class HotelsModule {}
