import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuccessPageComponent } from './website/success-page/success-page.component';
import { CancelPageComponent } from './website/cancel-page/cancel-page.component';
import { IndexComponent } from './website/index/index.component';
import { IndexThreejsComponent } from './website/index-threejs/index-threejs.component';

const routes: Routes = [
  {
    path: 'threejs',
    component: IndexThreejsComponent,
  },
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'success',
    component: SuccessPageComponent,
  },
  {
    path: 'cancel',
    component: CancelPageComponent,
  },
  { path: 'vendor/index', loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'addItem', loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
