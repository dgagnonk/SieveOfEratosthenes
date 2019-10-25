var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var serverhelpers = require("./serverhelpers");
var cors = require("cors");

app.use(cors());

app.use ( bodyParser.json( { type: "*/*" } ));

app.post("/setprime", (req, res) => {
    console.log(req.body);
    console.log("Received number " + req.body.number + " from frontend");

    let primes = getAllPrimes(req.body.number);
    let median = getMedianArray(primes);

    console.log("Primes: " + primes);
    console.log("Median: " + median);

    res.setHeader("Content-type", "application/json");
    return res.send(median);
});

app.listen(3000);
console.log("Server listening on port 3000.");