
# MedianPrimes

With server and client running, user enters a number into the textbox and clicks "Submit". Prime numbers lesser than or equal to the entered number are calculated on the server, and the median array element(s) are returned to the client.

E.g. user enters `10`, so `2,3,5,7` are primes which means `3,5` are returned.

## Stack
**Backend:** Express.js/Node.js

**Frontend:** HTML, CSS, JavaScript, React

## Errors

Most errors occur when there is bad input or the server isn't running. These errors come in the form of HTTP code 400 (Bad Request). If the number entered is too large, too small, or negative, the error message lets the user know that the number entered doesn't have any valid primes.

Otherwise, i.e. with the server not running, a standard "Bad Request" error message is displayed.

## Requirements and Setup

 - `npm` package manager
 - Run `npm install` to install `package.json` packages
 - Run `npm start` from root directory, and `node server.js` from the `src/server/` directory

## About the Code
The code is 100% commented, so feel free to peruse!

## Screenshots
**Server:**
![server.js](https://i.imgur.com/3to94Cu.png)
**Client:**
![enter image description here](https://i.imgur.com/HreOE62.png)

