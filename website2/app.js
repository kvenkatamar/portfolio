const express = require("express"); // imported express module
const path = require("path");
const fs = require("fs");

const app = express(); // created a express app
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files{here it is serving files of static folder}
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// ENDPOINTS
app.get('/', (req, res) =>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'GYM is the Best Place', 'content': con};
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{
    Name = req.body.name
    age = req.body.age
    gender = req.body.gender
    degree = req.body.degree
    more = req.body.more

    let outputToWrite = `the name of the client is ${Name}, ${age} years old, ${gender}, studying ${degree}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite);
    const params = {'title': 'GYM is the Best Place'};
    res.status(200).render('index.pug', params);

})

// START THE SERVER
// This is written to listen this express app at a given port
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

/* Previous Classes Matter
app.get("/about", (req, res) => {
    res.send("This is ABOUT PAGE of my first express app with Harry");
});

app.post("/about", (req, res) => {
    res.send("This is post request ABOUT PAGE of my first express app with Harry");
});

app.get("/services", (req, res) => {
    res.send("This is SERVICES PAGE of my first express app with Harry");
});

app.get("/contact", (req, res) => {
    res.send("This is CONTACT PAGE of my first express app with Harry");
});

app.get("/this", (req, res) => {
    // res.status(400).send("This page is NOT FOUND"); // Bad request
    res.status(404).send("This page is NOT FOUND"); // Not found
});

app.get("/", (req, res) => {
    // res.send("This is HOME PAGE of my first express app with Harry");
    res.status(200).send("This is HOME PAGE of my first express app with Harry");

});

// Our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hey Venkat Amar', message: 'Hello there! Thank you for helping me how to play PUBG!' })

});
*/