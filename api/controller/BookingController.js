const Booking = require("../Model/BookingSchema");

const createBooking = async (req, res) => {
    try {
      const { event, userName, status } = req.body;
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newBooking = new Booking({
        event, 
        userName,
         status
      });
  
      const booking = await newBooking.save();
      res.status(201).send(booking);
    } catch (error) {
      res.status(500).send({ statusCode: 500, errorMssg: error.message });
    }
  };