import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteModule } from './website/website.module';

const routes: Routes = [
  {
    path: '/',
    component: WebsiteModule,
  },
  {
    path: 'vendor',
    loadChildren: () =>
      import('./vendor/vendor.module').then((m) => m.VendorModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./public-user/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'removeItem',
    loadChildren: () =>
      import('./item/remove-item/remove-item.module').then(
        (m) => m.RemoveItemModule
      ),
  },
  {
    path: 'updateItem',
    loadChildren: () =>
      import('./item/update-item/update-item.module').then(
        (m) => m.UpdateItemModule
      ),
  },
  {
    path: 'createItem',
    loadChildren: () =>
      import('./item/create-item/create-item.module').then(
        (m) => m.CreateItemModule
      ),
  },
  {
    path: 'deleteItem',
    loadChildren: () =>
      import('./item/delete-item/delete-item.module').then(
        (m) => m.DeleteItemModule
      ),
  },
  {
    path: 'publicUser',
    loadChildren: () =>
      import('./public-user/public-user.module').then(
        (m) => m.PublicUserModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
