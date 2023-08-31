const express = require('express');
const port = 8080;

const app = express();

// lets add an array of objects. leter we will get this from mongo
const ideas = [
    {
        id: 1,
        text: 'Positive news letter thean only sends positive feedback', 
        tag: 'Technology', 
        username: 'TonyStark',
        date: '2023-12-02'
    },
    {
        id: 2,
        text: 'Milk cartons that turn a different colour', 
        tag: 'Technology', 
        username: 'Inventions',
        date: '2023-12-02'
    },
    {
        id: 3,
        text: 'ATM location app which lets you know where the nearest ATM is.', 
        tag: 'Technology', 
        username: 'TonyStark',
        date: '2023-12-02'
    },
];

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the random ideas API' });
});

// Get all ideas
app.get('/api/ideas', (req, res) => {
    res.json({ success: true, data: ideas});
});

// Get a single idea
app.get('/api/ideas/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({ success: false, error: 'Resource not found' });
    }

    res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));