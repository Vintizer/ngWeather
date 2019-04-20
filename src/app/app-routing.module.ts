import { ContactDeactivateGuard } from './guards/contact-deactivate.guard';
import { UsersGuard } from './guards/users.guard';
import { HotelContactsComponent } from './components/hotel-contacts/hotel-contacts.component';
import { HotelCommentsComponent } from './components/hotel-comments/hotel-comments.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: AboutComponent,
    canActivate: [UsersGuard]
  },
  {
    path: 'contact',
    component: AboutComponent
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'hotels/:id',
    component: HotelDetailsComponent
  },
  {
    path: 'hotels/:id/comments',
    component: HotelCommentsComponent
  },
  {
    path: 'hotels/:id/contacts',
    component: HotelContactsComponent,
    canDeactivate: [ContactDeactivateGuard]
  },
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
