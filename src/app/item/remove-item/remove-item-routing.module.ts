import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveItemComponent } from './remove-item.component';

const routes: Routes = [{ path: '', component: RemoveItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveItemRoutingModule { }
