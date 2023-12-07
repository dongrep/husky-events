const express = require("express");
const router = express.Router();
const event = require("../Model/EventSchema");
const user = require("../Model/UserSchema");
const { validateEventFields } = require("../helper");

router.post("/create", async (request, response) => {
  const {
    name,
    description,
    organizer,
    startTime,
    endTime,
    location,
    locationUrl,
    image,
    tags,
    attendees,
  } = request.body;

  if (
    !validateEventFields(
      response,
      name,
      description,
      organizer,
      startTime,
      endTime,
      location,
      image
    )
  ) {
    response.status(204).send("Missing required fields");
    return;
  }

  try {
    //check if event already exists by name
    let existingEvent = await event.findOne({ name: name });

    if (existingEvent && existingEvent.name == name) {
      return response.status(409).send("Event with given name already exists!");
    }

    const newEvent = new event({
      name,
      description,
      organizer,
      startTime,
      endTime,
      location,
      locationUrl,
      image,
      tags,
      attendees,
    });

    await newEvent.save();
    const neededUser = await user.findOne({ _id: organizer });

    if (neededUser) {
      neededUser.yourEvents.push(newEvent._id);
      await neededUser.save();
    }

    response.status(200).send("Event created successfully");
  } catch (err) {
    response.status(400).send("Something went wrong");
  }
});

router.put("/edit/:id", async (request, response) => {
  const {
    _id,
    name,
    description,
    organizer,
    startTime,
    endTime,
    location,
    locationUrl,
    image,
  } = request.body;

  if (name == null) {
    response.status(400).send({ error: "Missing required fields" });
    return;
  }

  try {
  let neededEvent = await event.findOneAndUpdate(
    { _id: _id },
    {
      name,
      description,
      organizer,
      startTime,
      endTime,
      location,
      locationUrl,
      image,
    }
  );
  

  if (!neededEvent) {
    response.send("Event not found!");
  } else {
    response.json(request.body);
  }
} catch (err) {
  console.log(err);
}
});

router.delete("/delete", async (request, response) => {
  const { _id } = request.query;

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

router.get("/getregisteredevents", async (request, response) => {
  const { userID } = request.query;

  if (!userID) {
    response.status(400).send({ error: "Missing required fields" });
    return;
  }

  let neededUser = await user.findOne({ _id: userID });

  if (!neededUser) {
    response.status(404).send("User not found!");
  } else {
    let registeredEvents = [];

    for (let i = 0; i < neededUser.registeredEvents.length; i++) {
      let neededEvent = await event.findOne({
        _id: neededUser.registeredEvents[i],
      });
      registeredEvents.push(neededEvent);
    }

    response.status(200).send(registeredEvents);
  }
});

router.get("/getcreatedevents", async (request, response) => {
  const { userID } = request.query;

  if (!userID) {
    response.status(400).send({ error: "Missing required fields" });
    return;
  }

  let neededUser = await user.findOne({ _id: userID });

  if (!neededUser) {
    response.status(404).send("User not found!");
  } else {
    let yourEvents = [];

    for (let i = 0; i < neededUser.yourEvents.length; i++) {
      let neededEvent = await event.findOne({
        _id: neededUser.yourEvents[i],
      });
      yourEvents.push(neededEvent);
    }

    response.status(200).send(yourEvents);
  }
});

module.exports = router;
