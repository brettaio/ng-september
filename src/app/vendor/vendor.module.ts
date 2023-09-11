import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [VendorComponent],
  imports: [CommonModule, VendorRoutingModule, SignupModule],
})
export class VendorModule {}
