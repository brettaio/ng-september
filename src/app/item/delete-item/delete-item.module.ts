import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteItemRoutingModule } from './delete-item-routing.module';
import { DeleteItemComponent } from './delete-item.component';


@NgModule({
  declarations: [
    DeleteItemComponent
  ],
  imports: [
    CommonModule,
    DeleteItemRoutingModule
  ]
})
export class DeleteItemModule { }
