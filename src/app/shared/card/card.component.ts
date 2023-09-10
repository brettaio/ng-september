import { Component, Input } from '@angular/core';
declare var Stripe: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor() {}

  triggerPayment() {
    // Create an instance of the Stripe object with your publishable API key
    const stripe = Stripe(
      'pk_test_51NbRDjL0dOKck8e30IKHMmqdys7VDRdusIGlePpcyPgmPdYqqcum5MYFH4bTgnIGF41aXsZTldY56Lfrqphop2xH00fislaiOR'
    );

    // Create a new Checkout Session using the server-side endpoint
    // You can replace '/api/stripe' with your actual server-side endpoint
    fetch('/functions/createCheckoutSession', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((session) => {
        return stripe.redirectToCheckout({ sessionId: session.id });
      })
      .then((result) => {
        // If `redirectToCheckout` fails due to a browser or network error,
        // display the localized error message to your customer
        if (result.error) {
          alert(result.error.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
