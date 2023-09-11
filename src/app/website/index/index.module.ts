import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CancelPageComponent } from '../cancel-page/cancel-page.component';
import { SuccessPageComponent } from '../success-page/success-page.component';
import { NetlifyFormsService } from '../services/netlify-forms/netlify-forms.service';
import { ModalPopupComponent } from '../components/modal-popup/modal-popup.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    CancelPageComponent,
    SuccessPageComponent,
    FooterComponent,
    ModalPopupComponent,
    CardComponent,
    FormComponent,
    HeaderComponent,
    HeroComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [NetlifyFormsService],
})
export class IndexModule {}
