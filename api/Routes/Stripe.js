// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
const stripe = require('stripe')('sk_test_51OJkayGuq2pJVYHIQTvwbgDFlQaZrXNDqrFRzJ54TyFBKtQPuoXqMemM2RogwiPPgmxE4azkDjnh13UUThy75KiO0095Ds3j41');
const express = require('express');
const app = express();


// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_86293ac6eda0dd72436a5d4aa22006fc9cace44591d491be11c55b2b0c7c939e";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {

    console.log("Entered");
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  console.log("Event",event);
  switch (event.type) {
    case event.payment_intent:
      const paymentIntentSucceeded = event.data.object;
      console.log("success");
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
      case 'payment_intent.':
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));