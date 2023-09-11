import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateItemRoutingModule } from './update-item-routing.module';
import { UpdateItemComponent } from './update-item.component';


@NgModule({
  declarations: [
    UpdateItemComponent
  ],
  imports: [
    CommonModule,
    UpdateItemRoutingModule
  ]
})
export class UpdateItemModule { }
