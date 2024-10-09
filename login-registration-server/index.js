require('dotenv').config();
require('./db/config');
const User = require('./db/models/User');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5001;
const jwtSecret = process.env.JWT_SECRET;

// Middleware
app.use(express.json());  // Parsing JSON Payloads (Parsing The data being transmitted in JSON format)
app.use(cors());          // Handling Cross-Origin Requests

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Get token from header
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach user data to request object
    next();  // Move to the next middleware or route handler
  } catch (error) {
    res.status(403).json({ message: 'Invalid token.' });
  }
};


app.get('/', (req, res) => {
    res.send("Server is running...");
});

app.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});


app.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body; 
      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });

      await user.save();
      console.log("user", user);
      const token = jwt.sign({id:user._id}, jwtSecret, { expiresIn: '1h'})
  
      res.status(201).json({ message: 'User registered successfully', token, user: { id: user._id, name: user.name } });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Server error', error });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token, user: { id: user._id, name: user.name } });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
