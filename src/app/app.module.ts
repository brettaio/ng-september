import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessPageComponent } from './website/success-page/success-page.component';
import { CancelPageComponent } from './website/cancel-page/cancel-page.component';
import { IndexComponent } from './website/index/index.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './shared/card/card.component';
import { FormComponent } from './shared/form/form.component';
import { HeroComponent } from './shared/hero/hero.component';
import { ModalPopupComponent } from './shared/modal-popup/modal-popup.component';
import { IndexThreejsComponent } from './website/index-threejs/index-threejs.component';
import { SignupComponent } from './vendor/signup/signup.component';
import { LoginComponent } from './vendor/login/login.component';
import { DashboardComponent } from './vendor/dashboard/dashboard.component';
import { OrdersComponent } from './vendor/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessPageComponent,
    CancelPageComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    FormComponent,
    HeroComponent,
    ModalPopupComponent,
    IndexThreejsComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
