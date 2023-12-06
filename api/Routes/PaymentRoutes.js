const express = require("express");
const router = express.Router();
const stripe  = require("stripe")("sk_test_51OJkayGuq2pJVYHIQTvwbgDFlQaZrXNDqrFRzJ54TyFBKtQPuoXqMemM2RogwiPPgmxE4azkDjnh13UUThy75KiO0095Ds3j41");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const Booking = require("../Model/BookingSchema");
app.use(cors({ origin: "http://localhost:3002" }));

router.use(bodyParser.raw({ type: 'application/json' }));

const {
    createBooking
  } = require("../controller/BookingController");

  var status = "";



router.post("/made", async (req,res) => {
    try{

        const customer = await stripe.customers.create({
            metadata : {
                userId: req.body.userId,
                eventId: req.body.event._id

            },
        })

        console.log("User-id",req.body.userID);
    const product =  {
        
        cost : 200,
        name : req.body.event
      };
    console.log(product);
    // product.map((product) => (

    const lineItems = 
        {

        price_data : {
            currency : "usd",
            product_data: {
                name: req.body.event.name
            },
            unit_amount : 0,
        },
        quantity : 1
    };

    const session =  await stripe.checkout.sessions.create({
        payment_method_types : ["card"],
        customer: customer.id,
        line_items:[lineItems],
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/failed",
    })
    // console.log(session);
    // res.json({ url: session.url });
    res.send({url : session.url});

    // console.log(session);
}
catch {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
}
});

router.post('/webhook',  (request, response) => {

    console.log("Entered");
    const endpointSecret = "whsec_86293ac6eda0dd72436a5d4aa22006fc9cace44591d491be11c55b2b0c7c939e";
  const sig = request.headers['stripe-signature'];
  let data;
  let eventType;
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.log(err.message);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  console.log("Event",event);

  data = event.data.object;
  eventType = event.type

  if(eventType === "checkout.session.completed"){

    stripe.customers.retrieve(data.customer).then(
        (customer) => {
            console.log("customer",customer);
            console.log("Data",data)
        }
    ).catch(err => console.log(err.message));
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});



router.post("/create", async (req, res) => {
    try {
      const { eventId, userId, status, cost } = req.body;

    //   console.log({ event, userName, status });
  
    //   const hashedPassword = await bcrypt.hash(password, 10);
      const newBooking = new Booking({
        eventId, 
        userId,
         status : status,
         cost
      });
  
      const booking = await newBooking.save();
      res.status(201).send(booking);
    } catch (error) {
        console.log(error)
      res.status(500).send({ statusCode: 500, errorMssg: error.message });
    }
  });



module.exports = router;