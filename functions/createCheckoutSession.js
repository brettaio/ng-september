// netlify/functions/createCheckoutSession.js

// Import the 'stripe' module using ES6-style import
import * as Stripe from 'stripe';

// Initialize the Stripe instance with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event, context) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: 'price_1NlAF9L0dOKck8e3miFCP7LT', // Replace with your actual price ID
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'https://ng-september.bretta.io/success',
            cancel_url: 'https://ng-september.bretta.io/cancel',
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ sessionId: session.id }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}
