const express = require("express");
const router = express.Router();
const user = require("../Model/UserSchema");
const { validateFields, getPasswordHash } = require("../helper");

router.post("/create", (request, response) => {
  const { name, email, password } = request.body;

  if (!validateFields(response, name, email, password)) return;

  const newUser = new user({
    name,
    email,
    password: getPasswordHash(password),
  });

  newUser.save().then(
    () => {
      console.log("Entry added to users");
      response.send("User created successfully");
    },
    (err) => console.log(err),
  );
});

router.put("/edit", async (request, response) => {
  const { name, email, password } = request.body;

  if (!validateFields(response, name, email, password)) return;

  let neededUser = await user.findOneAndUpdate(
    { email: email },
    { name, password: getPasswordHash(password) },
  );

  console.log(neededUser);

  if (!neededUser) {
    response.send("User not found!");
  } else {
    response.send(await user.findOne({ email: email }));
  }
});

router.delete("/delete", async (request, response) => {
  const { email } = request.body;

  if (!email) {
    response.status(400).send({ error: "Missing required fields" });
    return;
  }

  let neededUser = await user.findOneAndDelete({ email: email });

  if (!neededUser) {
    response.send("User not found!");
  } else {
    response.send("User deleted successfully!");
  }
});

router.get("/getAll", async (_, response) => {
  response.send(await user.find());
});

router.get("/getUser", async (request, response) => {
  const { email } = request.query;
  console.log(email);
  if (!email) {
    response.json({ message: "invalid user" });
    return;
  }
  let fetchedUser = await user.findOne({ email: email });
  response.send(fetchedUser);
});


module.exports = router;