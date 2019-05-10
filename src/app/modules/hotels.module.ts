import { ContactModule } from './contact/contact.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FavoriteHotelsComponent } from '../components/favorite-hotels/favorite-hotels.component';
import { FilterComponent } from '../components/filter/filter.component';
import { HotelsComponent } from '../components/hotels/hotels.component';
import { ListComponent } from '../components/list/list.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { StarsComponent } from '../components/stars/stars.component';
import { TextHighlightComponent } from '../components/text-highlight/text-highlight.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { LoadingDirective } from '../directives/loading.directive';
import { FilterPipe } from '../pipes/filter.pipe';
import { FavoriteService } from '../services/favorite-service.service';
import { FilterService } from '../services/filter.service';
import { ActiveHotelPhotoComponent } from '../components/active-hotel-photo/active-hotel-photo.component';
import { HotelDetailsComponent } from '../components/hotel-details/hotel-details.component';
import { HotelCommentsComponent } from '../components/hotel-comments/hotel-comments.component';
import { HotelContactsComponent } from '../components/hotel-contacts/hotel-contacts.component';

const routes: Routes = [
  { path: '', component: HotelsComponent, pathMatch: 'full' },
  {
    path: ':id',
    component: HotelDetailsComponent,
    children: [
      {
        path: 'comments',
        component: HotelCommentsComponent
      },
      {
        path: 'contacts',
        component: HotelContactsComponent
      }
    ]
  }
];
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
    FilterPipe,
    ActiveHotelPhotoComponent,
    HotelDetailsComponent,
    HotelCommentsComponent,
    HotelContactsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FontAwesomeModule,
    MatPaginatorModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [LoadingComponent],
  providers: [FavoriteService, FilterService, FilterPipe]
})
export class HotelsModule {}
