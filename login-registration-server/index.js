require('./db/config');
const User = require('./db/models/User');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body; 
      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully', user: newUser });
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

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
