import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

declare var Stripe: any;

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  stripe: any;
  stripeSession: any;

  constructor(private http: HttpClient) {
    this.stripe = Stripe(
      'pk_test_51NbRDjL0dOKck8e30IKHMmqdys7VDRdusIGlePpcyPgmPdYqqcum5MYFH4bTgnIGF41aXsZTldY56Lfrqphop2xH00fislaiOR'
    ); // Replace with your Stripe public key
  }

  initiatePayment() {
    this.http
      .post('/functions/createCheckoutSession', {})
      .pipe(
        catchError((error) => {
          console.error('Error initiating payment:', error);
          throw error;
        })
      )
      .subscribe((response: any) => {
        this.stripeSession = response.sessionId;
        console.log('Stripe session info:', this.stripeSession);

        this.stripe
          .redirectToCheckout({
            sessionId: this.stripeSession,
          })
          .then((result: any) => {
            if (result.error) {
              console.error('Error initiating payment:', result.error);
            }
          });
      });
  }
}
