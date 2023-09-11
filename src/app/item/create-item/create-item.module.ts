import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateItemRoutingModule } from './create-item-routing.module';
import { CreateItemComponent } from './create-item.component';


@NgModule({
  declarations: [
    CreateItemComponent
  ],
  imports: [
    CommonModule,
    CreateItemRoutingModule
  ]
})
export class CreateItemModule { }
