import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent, // Use the IndexComponent as the default component
  },
  // Add other routes for the IndexModule if needed
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class IndexRoutingModule {}
