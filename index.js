const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static('public'));

// Define a route for the home page that serves 'index.html'
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Define a route for the 'about' page
app.get('/about', (req, res) => {
    res.send('About Us');
});

// Route to handle POST requests and add items
const items = ['Apple', 'Banana', 'Orange'];

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    if (newItem) {
        items.push(newItem);
    }
    res.json(items); // Return the updated items
});

// Route to handle GET requests for items
app.get('/items', (req, res) => {
    res.json(items); // Return the current list of items
});

// Logger middleware
app.use((err, req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next();
});

app.post('/submit', (req,res) => {
    const data = req.query;
    res.send(`Received: ${JSON.stringify(data)}`)
})

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
