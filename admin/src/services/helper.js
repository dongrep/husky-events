export const performAllValidation = (formData) => {
  const { firstName, lastName, email, password, phone } = formData;
  const fullNameRegExp = /^[A-Za-z]+(?: [A-Za-z]+)?(?: [A-Za-z]+)?$/;
  const emailRegExp = /^[\w-]+(\.[\w-]+)*@northeastern\.edu$/; // Northeastern University email validation
  const passwordExp = /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{7,}$/;

  if (!firstName || !lastName || !email || !password || !phone) {
    throw new Error("Please enter all the fields.");
  }

  if (!firstName.match(fullNameRegExp)) {
    throw new Error("Please enter a valid first name.");
  } else if (!lastName.match(fullNameRegExp)) {
    throw new Error("Please enter a valid last name.");
  } else if (!email.match(emailRegExp)) {
    throw new Error("Please enter a valid Northeastern University email.");
  } else if (!password.match(passwordExp)) {
    throw new Error("Please enter a valid password.");
  } else if (!phone.match(/^\d{10}$/)) {
    throw new Error("Please enter a valid 10-digit phone number.");
  }
};

export const performEventsValidation = (formData) => {
  const { name, description, organizer, startTime, endTime, location, image } =
    formData;

  if (
    !name ||
    !description ||
    !organizer ||
    !startTime ||
    !endTime ||
    !location ||
    !image
  ) {
    throw new Error("Please enter all the fields.");
  }
};
