import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveItemRoutingModule } from './remove-item-routing.module';
import { RemoveItemComponent } from './remove-item.component';


@NgModule({
  declarations: [
    RemoveItemComponent
  ],
  imports: [
    CommonModule,
    RemoveItemRoutingModule
  ]
})
export class RemoveItemModule { }
