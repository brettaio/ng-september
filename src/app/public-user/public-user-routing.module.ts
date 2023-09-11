import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicUserComponent } from './public-user.component';

const routes: Routes = [{ path: '', component: PublicUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicUserRoutingModule { }
