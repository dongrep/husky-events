const express = require("express");
const router = express.Router();

const {
  deleteUser,
  loginUser,
  updateUser,
  createUser,
  getAllUsers,
  getUser,
} = require("../controller/userController");

// Get  User
router.get("/get/:userID", getUser);

// Get All Users
router.get("/getAll", getAllUsers);

// Create User
router.post("/create", createUser);

// Update User
router.put("/edit/:userID", updateUser);

// Delete User
router.delete("/delete/:userID", deleteUser);

// Login User
router.post("/login", loginUser);

module.exports = router;
