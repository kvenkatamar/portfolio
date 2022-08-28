//Reference the Button.
var btnSubmit = document.getElementById("btnSubmit");
//Reference the input box
var input1 = document.querySelector(".username");
var input2 = document.querySelector(".pwd");
//Reference the labels
var label1 = document.querySelector("#label-1");
var label2 = document.querySelector("#label-2");

function EnableDisable() {
    //Verify the TextBox value.
    if (input1.value != "" && input2.value.length >= 5) {
        //Enable the TextBox when TextBox has value.
        btnSubmit.disabled = false;
        btnSubmit.style.opacity = 1;
    } else {
        //Disable the TextBox when TextBox is empty.
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = 0.3;
    }
};

(function(){
    let images = document.querySelectorAll('.slideshow');
    let counter = 1;

    if(counter <= images.length){
        setInterval(function(){
            images[0].src = images[counter].src;
            // console.log(images[0]);
            counter++;

            if(counter === images.length){
                counter = 1;
            }
        },5000);
    }
})();

// // NODE JS
// const express = require("express"); //imported express module
// const path = require("path");
// const fs = require("fs");
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost/LoginInsta');
// }
// const port = 8000;

// const kittySchema = new mongoose.Schema({
//     username: String,
//     password: String
// });

// var Kitten = mongoose.model('Kitten', kittySchema);
