const stripe = require('stripe')('your_stripe_secret_key');

module.exports = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, 'your_webhook_secret');
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Handle successful payment intent
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('Event processed');
};
