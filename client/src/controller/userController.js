// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();

// Use CORS middleware
app.use(cors());
const PORT = process.env.PORT || 3002;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jwt = require('jsonwebtoken');


// Create a user schema
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash the password before saving it to the database
UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', UserSchema);

// Middleware
app.use(bodyParser.json());


function generateToken(user) {
    const payload = {
      userId: user._id,
      email: user.email,
      password: user.password
    };
    const crypto = require('crypto');
    const secretKey = crypto.randomBytes(32).toString('hex');
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  
    return token;
  }
  

// Signup route
app.post('/user/signup', async (req, res) => {
    const { firstName, lastName, email, password, phone, role } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists!' });
      }
  
      // Hash the password
      const hashedPassword = password;
  
      // Create a new user with the hashed password
      const newUser = new User({
        firstName,
        lastName,
        email,
        password : hashedPassword,
        phone,
        role,
      });
  
      // Save the user to the database
      await newUser.save();

      const token = generateToken(newUser);
  
      res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// Login route
app.post('/user/login', async (req, res) => {
    console.log('Received request body:', req.body);
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
   
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    // res.send(password);
    // res.send(user.password);
    const hashedPasswordFromDatabase = '$2b$10$qJ6wisMgUKdNC6dheZAeVuWSsohQZzAouuYU5GJ2hZmBcKHpq1Ftm'; // Replace with the actual hashed password
    const userProvidedPassword = 'Prani@1234';
    
   const testPassword = await bcrypt.compare(userProvidedPassword, hashedPasswordFromDatabase, (err, result) => {
      if (err) {
        console.error('Error during comparison:', err);
      } else {
        if (result) {
          console.log('Passwords match. Login successful.');
        } else {
          console.log('Passwords do not match. Login failed.');
        }
      }
    });
    console.log(testPassword);
    // const hashedPassword = await bcrypt.hash(password, 10);
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch);

    if (passwordMatch) {
      // Passwords match, login successful
      const token = generateToken(user);
      res.json({ message: 'Login successful', token, user });
    } else {
      // Passwords do not match, login failed
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
