const express = require("express");
const router = express.Router();

const {
  deleteUser,
  loginUser,
  updateUser,
  createUser,
  getAllUsers,
  getUser,
  getUsersCount,
  getUserByToken,
  loginAdmin,
} = require("../controller/userController");

// Get  User
router.get("/get/:userID", getUser);

// Get  User by Token
router.get("/getUser/:token", getUserByToken);

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

// Login Admin
router.post("/loginAdmin", loginAdmin);

// COUNT User
router.get("/count", getUsersCount);

module.exports = router;
