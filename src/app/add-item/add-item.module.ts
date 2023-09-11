import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddItemRoutingModule } from './add-item-routing.module';
import { AddItemComponent } from './add-item.component';


@NgModule({
  declarations: [
    AddItemComponent
  ],
  imports: [
    CommonModule,
    AddItemRoutingModule
  ]
})
export class AddItemModule { }
