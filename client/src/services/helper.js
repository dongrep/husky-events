export const performAllValidation = (formData) => {
  console.log("Hello from performAllValidation!", formData);
  const { firstName, lastName, email, password, confirmPassword, phone } = formData;
  const fullNameRegExp = /^[A-Za-z]+(?: [A-Za-z]+)?(?: [A-Za-z]+)?$/;
  const emailRegExp = /^[\w-]+(\.[\w-]+)*@northeastern\.edu$/; // Northeastern University email validation
  const passwordExp = /^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{7,}$/;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword ||
    !phone
  ) {
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
  } else if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  } else if (!phone.match(/^\d{10}$/)) {
    throw new Error("Please enter a valid 10-digit phone number.");
  }
};