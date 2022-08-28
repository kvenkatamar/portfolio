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

//Reference the Button.
let btnSubmit = document.getElementById("submitbtn");
//Reference the input box
let input = document.querySelectorAll("input");
//Reference the labels
let label = document.querySelectorAll(".label");
//Reference the error box
let error = document.querySelectorAll(".error");
//Reference the number of rights
let right1 = 0;
let right2 = 1;
let right3 = 0;
let right4 = 0;


var EnableDisable = ()=> {
    // display Show button if you entered any text
    if(input[3].value!=''){
        if(input[3].type == "password"){
            document.querySelector(".hidebtn").style.display = "none";
            document.querySelector(".showbtn").style.display = "block";
        }
        else{
            document.querySelector(".hidebtn").style.display = "block";
            document.querySelector(".showbtn").style.display = "none";
        }
    }
    else{
        document.querySelector(".showbtn").style.display = "none";
        document.querySelector(".hidebtn").style.display = "none";
    }

    //Verify the TextBox value.
    validateData();

    if(right1+right2+right3+right4==4){
        btnSubmit.disabled = false;
        btnSubmit.style.opacity = 1;
    }
    else{
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = 0.3;
    }
};

var validateData = () =>{
    /* calling functions */
    validate_email();
    validate_fullname();
    validate_username();
    validate_password();
}

var validate_email = () => {
    if(input[0].value == ""){
        right1 = 0;
        error[0].style.display = 'block';
        error[0].appendChild(document.createElement(`span`)).classList.add(`wrong-mark`);
    }
    else{
        let validRegex = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
        if(validRegex.test(input[0].value) || (isNaN(input[0]) && input[0].value.length==10)){
            right1 = 1;
            error[0].style.display = 'block';
            error[0].appendChild(document.createElement(`span`)).classList.add(`right-mark`);
        }
        else{
            right1 = 0;
            error[0].style.display = 'block';
            error[0].appendChild(document.createElement(`span`)).classList.add(`wrong-mark`);
        }
    }
}

var validate_fullname = () => {
    right2 = 1;
    error[1].style.display = 'block';
    error[1].appendChild(document.createElement(`span`)).classList.add(`right-mark`);
}

var validate_username = () => {
    if(input[2].value == ""){
        right3 = 0;
        error[2].style.display = 'block';
        error[2].appendChild(document.createElement(`span`)).classList.add(`wrong-mark`);
    }
    else{
        error[2].style.display = 'block';
        error[2].appendChild(document.createElement(`span`)).classList.add(`right-mark`);
        right3 = 1;
    }
}

var validate_password = () => {
    let upperCaseCount = 0;
    for(var i = 0; i < input[3].value.length; i++){
        if(input[3].value.charCodeAt(i) >= 65 && input[3].value.charCodeAt(i) <= 90){
            upperCaseCount++;
        }
    }
    var splChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    let splCharCount = 0;
    for(var i = 0; i < splChar.length; i++){
        if(input[3].value.includes(splChar[i])){
            splCharCount++;
        }
    }
    //pwd can't be empty
    //length 8 char
    //pwd not Start with number
    //have one upperCase char
    //min 2 spl characters

    if(input[3].value == '' || input[3].value.length <= 8 || (input[3].value.charCodeAt(0) <= 57 && input[3].value.charCodeAt(0) >= 48) || upperCaseCount < 1 || splCharCount < 1){
        right4 = 0;
        error[3].style.display = 'block';
        error[3].appendChild(document.createElement(`span`)).classList.add(`wrong-mark`);
    }
    else{        
        right4 = 1;
        error[3].style.display = 'block';
        error[3].appendChild(document.createElement(`span`)).classList.add(`right-mark`);
    }
}

var showPassword = ()=> {
    if(input[3].type == "password"){
        input[3].type = "text";
        document.querySelector(".hidebtn").style.display = "block";
        document.querySelector(".showbtn").style.display = "none";
    }
    else{
        input[3].type = "password";
        document.querySelector(".hidebtn").style.display = "none";
        document.querySelector(".showbtn").style.display = "block";
    }
}

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

