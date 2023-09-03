const express = require('express');
// require dotenv allows us to require the .env in the config file
require('dotenv').config();
const port = process.env.PORT || 5001;
const connectDB = require('./config/db');

connectDB();

const app = express();

// body parser middleware
// We use middleware to parse data between the req and res
// allow to send raw json to browser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the random ideas API' });
});

// here we are importing our module.exports from ./router/ideas
const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));