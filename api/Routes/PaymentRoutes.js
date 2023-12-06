const express = require("express");
const router = express.Router();
const stripe  = require("stripe")("sk_test_51OJkayGuq2pJVYHIQTvwbgDFlQaZrXNDqrFRzJ54TyFBKtQPuoXqMemM2RogwiPPgmxE4azkDjnh13UUThy75KiO0095Ds3j41");
const app = express();
const cors = require("cors");
const Booking = require("../Model/BookingSchema");
app.use(cors({ origin: "http://localhost:3002" }));

const {
    createBooking
  } = require("../controller/BookingController");



router.post("/made", async (req,res) => {
    try{

        console.log(req.body.userId);
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
        line_items:[lineItems],
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/failed",
    })
    console.log(session);
    // res.json({ url: session.url });
    res.send({url : session.url});
}
catch {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
}
});

router.post("/create", async (req, res) => {
    try {
      const { event, userName, status } = req.body;

      console.log({ event, userName, status });
  
    //   const hashedPassword = await bcrypt.hash(password, 10);
      const newBooking = new Booking({
        event, 
        userName,
         status
      });
  
      const booking = await newBooking.save();
      res.status(201).send(booking);
    } catch (error) {
        console.log(error)
      res.status(500).send({ statusCode: 500, errorMssg: error.message });
    }
  });



module.exports = router;