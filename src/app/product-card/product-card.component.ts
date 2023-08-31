import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  stripeSession: any;

  constructor(private http: HttpClient) {}

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
        this.stripeSession = response;
        console.log('Stripe session info:', this.stripeSession);

        const sessionId = response.sessionId;

        // Redirect the user to the Stripe checkout page
        window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
      });
  }
}
