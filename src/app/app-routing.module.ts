import { ContactDeactivateGuard } from './guards/contact-deactivate.guard';
import { UsersGuard } from './guards/users.guard';
import { HotelCommentsComponent } from './components/hotel-comments/hotel-comments.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'hotels',
    loadChildren: './modules/hotels.module#HotelsModule',
  },
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule',
    canActivate: [UsersGuard]
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule',
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
