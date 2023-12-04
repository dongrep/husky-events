const express = require("express");
const router = express.Router();
const event = require("../Model/EventSchema");
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
      tags
    )
  )
    return;

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
    (err) => response.send(err)
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
    }
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

module.exports = router;
