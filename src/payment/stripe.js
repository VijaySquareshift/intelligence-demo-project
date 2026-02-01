// Stripe v3 API Migration
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createPaymentIntent(amount, currency) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: { enabled: true },
  });
  return paymentIntent;
}

// TODO: Add error handling for webhook failures
// TODO: Add test coverage for refund flow

module.exports = { createPaymentIntent };
