const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors')();

exports.handler = async function (event, context) {
    // Enable CORS for all routes in this function
    await cors(event, context);

    if (event.httpMethod === 'POST') {
        try {
            // Your Stripe code to create a checkout session goes here
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
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionId: session.id }),
            };
        } catch (error) {
            return {
                statusCode: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ error: error.message }),
            };
        }
    } else {
        return {
            statusCode: 405, // Method not allowed
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }
};
