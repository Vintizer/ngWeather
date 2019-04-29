import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../../components/users/users.component';

const routes: Routes = [{ path: '', component: UsersComponent }];
@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class UsersModule {}
