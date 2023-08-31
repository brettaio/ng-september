// netlify/functions/createCheckoutSession.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
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
};
