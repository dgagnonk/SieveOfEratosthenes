var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var serverhelpers = require("./serverhelpers");

app.use ( bodyParser.json( { type: "application/json" } ));

app.post("/setprime", (req, res) => {
    console.log("Received number " + req.body.prime + " from frontend");

    let primes = getAllPrimes(req.body.prime);
    let median = getMedianArray(primes);

    console.log("Primes: " + primes);
    console.log("Median: " + median);
});

app.listen(3000);
console.log("Server listening on port 3000.");