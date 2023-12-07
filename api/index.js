const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./Routes/UserRoutes");
const eventRouter = require("./Routes/EventRoutes");
const contactRouter = require("./Routes/ContactRoutes");
const app = express();

require("dotenv").config();
const PORT = require("./config");

mongoose.connect(process.env.MONGODB_URL, {
  dbName: "husky-events",
  useNewUrlParser: true,
});

app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/event", eventRouter);
app.use("/contact", contactRouter);

app.listen(PORT, () => {
  console.log("Listening on PORT: " + PORT);
});
