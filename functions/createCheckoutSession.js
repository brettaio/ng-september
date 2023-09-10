
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async (event, context) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "T-shirt",
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: "https://bretta.io/success",
        cancel_url: "https://bretta.io/cancel",
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            id: session.id,
        }),
    };
};