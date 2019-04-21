import { ReactiveFormsModule } from '@angular/forms';
import { HotelContactsComponent } from './../../components/hotel-contacts/hotel-contacts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HotelContactsComponent }];
@NgModule({
  declarations: [HotelContactsComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class ContactModule {}
