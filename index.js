const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('hello, world!');
});

app.get('/about', (req, res) => {
    res.send('About Us')
})





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

