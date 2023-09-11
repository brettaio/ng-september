import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicUserRoutingModule } from './public-user-routing.module';
import { PublicUserComponent } from './public-user.component';


@NgModule({
  declarations: [
    PublicUserComponent
  ],
  imports: [
    CommonModule,
    PublicUserRoutingModule
  ]
})
export class PublicUserModule { }
