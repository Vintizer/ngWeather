import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoadingDirective } from '../directives/loading.directive';
import { FilterPipe } from '../pipes/filter.pipe';
import { FavoriteService } from '../services/favorite-service.service';
import { FilterService } from '../services/filter.service';
import { FavoriteHotelsComponent } from '../components/favorite-hotels/favorite-hotels.component';
import { FilterComponent } from '../components/filter/filter.component';
import { ListComponent } from '../components/list/list.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { StarsComponent } from '../components/stars/stars.component';
import { TextHighlightComponent } from '../components/text-highlight/text-highlight.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { HotelsComponent } from '../components/hotels/hotels.component';

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
    TextHighlightComponent,
    FilterPipe
  ],
  imports: [CommonModule, MatCardModule, FontAwesomeModule],
  exports: [HotelsComponent],
  entryComponents: [LoadingComponent],
  providers: [FavoriteService, FilterService, FilterPipe]
})
export class HotelsModule {}
