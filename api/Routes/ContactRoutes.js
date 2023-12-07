const express = require("express");
const router = express.Router();
const event = require("../Model/EventSchema");
const user = require("../Model/UserSchema");
const contact = require("../Model/ContactSchema");

router.post("/save", async (request, response) => {
    const data = {
        firstName,
        lastName,
        emailId,
        phone,
        message,
        userId
    } = request.body;
  try {

    const emailRegExp = /^[\w-]+(\.[\w-]+)*@northeastern\.edu$/;

    if (!emailId.match(emailRegExp)) {
        // Email doesn't match the regex
        return response.status(204).send("Invalid email format");
    }

    if(!phone.match(/^\d{10}$/)){
        return response.status(204).send("Invalid phone format");
    }

    const newContact = new contact({
        firstName,
        lastName,
        emailId,
        phone,
        message,
        userId
    });

    await newContact.save();

    response.status(200).send("Query saved successfully");
  } catch (err) {
    response.status(400).send("Something went wrong");
  }
});
module.exports = router;
