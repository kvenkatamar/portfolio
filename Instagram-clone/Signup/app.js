const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 80;
// Getting-started .js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    console.log("We are connected bro......");
    await mongoose.connect('mongodb://localhost:27017/Instagram');
}

const signupSchema = new mongoose.Schema({
    email: String,
    fullname: String,
    username: String,
    password: String
});

const Signup = mongoose.model('Signup', signupSchema);

// EXPRESS STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded())

// PUG STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/', (req, res) =>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'Instagram is the Best Place', 'content': con};
    res.status(200).render('../../Login/views/index.pug', params);
});

app.get('/signup', (req, res) =>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'Instagram is the Best Place', 'content': con};
    res.status(200).render('../views/signup.pug', params);
});

app.post('/signup', (req, res)=>{
    Email = req.body.email;
    Username = req.body.username;
    Name = req.body.fullname;
    Password = req.body.password

    let outputToWrite = `The name of the client is ${Name} and ${Name}'s password is ${Password}\n`
    fs.appendFileSync('Login_Credientials.txt', outputToWrite);

    const signup = new Signup(req.body);
    signup.save().then(()=>{
        res.send("This item has been saved to the database");
    }).catch(()=>{
        res.status(400).send("item was not saved to the databse");
    })
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port:${port}`);
})