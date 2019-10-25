var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var serverhelpers = require("./serverhelpers");
var cors = require("cors");

app.use(cors());

app.use ( bodyParser.json( { type: "*/*" } ));

app.post("/setprime", (req, res) => {
    console.log(req.body);
    console.log("Received " + req.body.number + " from frontend");

    let num = parseInt(req.body.number);
    let errorMsg = "";

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