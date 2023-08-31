import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessPageComponent } from './website/success-page/success-page.component';
import { CancelPageComponent } from './website/cancel-page/cancel-page.component';

const routes: Routes = [
  {
    path: 'success',
    component: SuccessPageComponent,
  },
  {
    path: 'cancel',
    component: CancelPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
