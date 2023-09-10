import { Component } from '@angular/core';
declare var Stripe: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor() {}

  async triggerPayment() {
    try {
      // Fetch the Stripe session from your serverless function
      const response = await fetch('/functions/createCheckoutSession', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Error fetching Stripe session');
      }

      const session = await response.json();

      // Initialize Stripe with your publishable key
      const stripe = Stripe(
        'pk_test_51NbRDjL0dOKck8e30IKHMmqdys7VDRdusIGlePpcyPgmPdYqqcum5MYFH4bTgnIGF41aXsZTldY56Lfrqphop2xH00fislaiOR'
      );

      // Redirect to the Stripe Checkout page
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Payment Error:', error);
      // Handle the error as needed (e.g., display an error message)
    }
  }
}
