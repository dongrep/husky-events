const Users = require("../Model/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Get All Users
const getAllUsers = async (req, res) => {
  const query = req.query.q;

  if (query) {
    const regex = new RegExp(query, "i");
    console.log("Hello    getAllUsers   query:", query);
    const users = await Users.find({
      $or: [
        { firstName: { $regex: regex } },
        { lastName: { $regex: regex } },
        { email: { $regex: regex } },
        { phone: { $regex: regex } },
      ],
    });
    res.status(200).json(users);
  } else {
    const users = await Users.find();
    res.status(200).json(users);
  }
};

// Get Single Users
const getUser = async (req, res) => {
  const user = await Users.findById(req.params.userID);
  res.status(200).json(user);
};

// Create User
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
      firstName,
      lastName,
      email,
      phone,
      role,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ statusCode: 500, errorMssg: error.message });
  }
};

// Update User
const updateUser = async (req, res) => {
  try {
    const { password, ...otherDetails } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUserData = {
      ...otherDetails,
      password: hashedPassword,
    };
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.userID,
      { $set: updatedUserData },
      { new: true }
    );
    console.log("Hello    app.put   updatedUser:", updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send({ statusCode: 500, errorMssg: error.message });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.userID);
    res.status(200).json("User has been deleted");
  } catch (error) {
    console.log("Hello    app.delete   error:", error);
    res.status(500).send({ statusCode: 500, errorMssg: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("Please enter all fields");
    }

    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("User is not present");
    }

    let checkPassword = await bcrypt.compare(req.body.password, user.password);
    console.log("Hello    app.post   checkPassword:", checkPassword);
    if (!checkPassword) {
      throw new Error("Email or password is incorrect");
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.role === "admin" },
      process.env.JWT
    );
    const { password, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (error) {
    console.log("Hello    app.delete   error:", error);
    res.status(500).send({ statusCode: 500, errorMssg: error.message });
  }
};

module.exports = {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
