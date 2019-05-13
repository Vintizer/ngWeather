import { ContactDeactivateGuard } from './../../guards/contact-deactivate.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './../../components/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    canDeactivate: [ContactDeactivateGuard],
  }
];
@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes) ]
})
export class ContactModule {}
