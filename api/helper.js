const bcrypt = require("bcrypt");
const passwordRegEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

const getPasswordHash = (password) => {
  return bcrypt.hashSync(password, 10);
};

const validateUserFields = (response, name, email, password) => {
  if (!name || !email || !password) {
    response.status(400).send({ error: "Missing required fields" });
    return false;
  }

  if (password.length < 8) {
    response
      .status(400)
      .send({ error: "Password must be at least 8 characters long" });
    return false;
  } else if (!passwordRegEx.test(password)) {
    response.status(400).send({
      error:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    });
    return false;
  }
  return true;
};

const validateEventFields = (
  name,
  description,
  organizer,
  startTime,
  endTime,
  location,
  image
) => {
  if (
    !name ||
    !description ||
    !organizer ||
    !startTime ||
    !endTime ||
    !location ||
    !image
  ) {
    // response.status(400).send({ message: "Missing required fields" });
    return false;
  }
  return true;
};

module.exports = { getPasswordHash, validateUserFields, validateEventFields };
