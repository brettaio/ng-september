import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicUserComponent } from './public-user.component';
import { SignupModule } from './signup/signup.module';

const routes: Routes = [
  {
    path: '*',
    component: PublicUserComponent,
    children: [
      {
        path: '',
        component: SignupModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicUserRoutingModule {}
