const express = require("express");
const router = express.Router();
const event = require("../Model/EventSchema");
const user = require("../Model/UserSchema");
const { validateEventFields } = require("../helper");

router.post("/create", (request, response) => {
  const {
    name,
    description,
    organizer,
    scheduleTime,
    duration,
    location,
    image,
    tags,
  } = request.body;

  if (
    !validateEventFields(
      response,
      name,
      description,
      organizer,
      scheduleTime,
      duration,
      location,
      image,
      tags,
    )
  ) {
    response.status(204).send("Missing required fields");
    return;
  }

  //check if event already exists by name
  let existingEvent = event.findOne({ name: name });

  if (existingEvent.name == name) {
    response.send("Event already exists!");
  }

  const newEvent = new event({
    name,
    description,
    organizer,
    scheduleTime,
    duration,
    location,
    image,
    tags,
  });

  newEvent.save().then(
    () => {
      response.send("Event created successfully");
    },
    (err) => response.status(400).send({ message: err }),
  );
});

router.put("/edit", async (request, response) => {
  const {
    _id,
    name,
    description,
    organizer,
    scheduleTime,
    duration,
    location,
    image,
    tags,
  } = request.body;

  if (name == null) {
    response.status(400).send({ error: "Missing required fields" });
    return;
  }

  let neededEvent = await event.findOneAndUpdate(
    { _id: _id },
    {
      name,
      description,
      organizer,
      scheduleTime,
      duration,
      location,
      image,
      tags,
    },
  );

  if (!neededEvent) {
    response.send("Event not found!");
  } else {
    response.json(request.body);
  }
});

router.delete("/delete", async (request, response) => {
  const { _id } = request.query;
  console.log("Hello    router.delete   request.body:", request.body);
  console.log("Hello    router.delete   _id:", _id);

  if (!_id) {
    response.status(400).send({ error: "Missing required fields" });
    return;
  }

  let neededEvent = await event.findOneAndDelete({ _id: _id });

  if (!neededEvent) {
    response.send("Event not found!");
  } else {
    response.send("Event deleted successfully!");
  }
});

router.get("/events", async (request, response) => {
  const searchQuery = request.query.q;

  if (searchQuery) {
    const regex = new RegExp(searchQuery, "i");
    console.log("Hello    getAllUsers   searchQuery:", searchQuery);
    const events = await event.find({
      $or: [
        { name: { $regex: regex } },
        { location: { $regex: regex } },
        { organizationID: { $regex: regex } },
      ],
    });
    response.status(200).json(events);
  } else {
    const events = await event.find();
    response.status(200).json(events);
  }
  /*response.send(await event.find());*/
});

router.get("/getevent", async (request, response) => {
  const { _id } = request.query;

  if (!_id) {
    response.status(400).send({ error: "Missing required fields" });
    return;
  }

  let neededEvent = await event.findOne({ _id: _id });

  if (!neededEvent) {
    response.send("Event not found!");
  } else {
    response.send(neededEvent);
  }
});

router.put("/register", async (request, response) => {
  const { eventID, userID } = request.body;

  if (!eventID || !userID) {
    response.status(400).send({ error: "Missing required fields" });
    return;
  }

  let neededEvent = await event.findOne({ _id: eventID });
  let neededUser = await user.findOne({ _id: userID });

  if (!neededEvent) {
    response.status(404).send("Event not found!");
  } else if (!neededUser) {
    response.status(404).send("User not found!");
  } else if (neededEvent.attendees.includes(userID)) {
    response.status(409).send("User already registered!");
  } else {
    neededEvent.attendees.push(userID);
    neededUser.registeredEvents.push(eventID);
    neededEvent.save();
    neededUser.save();
    response.status(201).send("User registered successfully!");
  }
});

module.exports = router;
