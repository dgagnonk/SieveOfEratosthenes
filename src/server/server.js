/*
    server.js
    ===========
    Node.js/Express.js server file. Server can be started with "node server.js"
*/

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// serverHelpers contains functions for getAllPrimes and getMedianArray
var serverhelpers = require("./serverhelpers");
var cors = require("cors");

// Use cors to allow cross-origin requests and accept any type of content-type
app.use(cors());
app.use ( bodyParser.json( { type: "*/*" } ));

// POST route
// Example: http://localhost:3000/setprime
app.post("/setprime", (req, res) => {
    //console.log(req.body);
    console.log("Received " + req.body.number + " from frontend");

    // Receive and parse user input. Try to parse as int.
    let num = parseInt(req.body.number);
    let errorMsg = "";

    // User number can't be anything but an int, and has to be smaller 
    // than JS's max int and larger than or equal to the smallest prime (2)
    if (Number.isInteger(num) && num <= Number.MAX_SAFE_INTEGER && num >= 2) {
        let primes = getAllPrimes(req.body.number);
        let median = getMedianArray(primes);
    
        console.log("Primes: " + primes);
        console.log("Median: " + median);
    
        res.setHeader("Content-type", "application/json");
        return res.send(median);
    } else if (num < 2) {
        errorMsg = "Invalid input. No primes for this number.";
    } else {
        errorMsg = "Invalid input.";
    }

    console.log(errorMsg);
    res.statusMessage = errorMsg;
    return res.status(400).send();

});

app.listen(3000);
console.log("Server listening on port 3000.");