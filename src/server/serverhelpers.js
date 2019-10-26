/*
    serverHelpers.js
    ===========
    JS functions to calculate prime numbers and find median array.
*/

// Gets all primes less than or equal to "num" (int)
getAllPrimes = (num) => {
    
    if (num < 2) return [];

    let allNums = [];
    let primes = [2]; // Start with 2 since it is the lowest prime, always
    let markedP = [];

    for (let i = 2; i <= num; i++) {
        allNums.push(i);
    }

    let p = 2;

    // Sieve of Eratosthenes
    while (true) {
        let pSq = Math.pow(p, 2);

        for (let i = pSq; i <= num; i += p) {
            if (i >= pSq) markedP.push(i);
        }
    
        let foundPrime = false;

        for (let i = 0; i < allNums.length; i++) {
            if (allNums[i] > p && !markedP.includes(allNums[i])) {
                p = allNums[i];
                primes.push(allNums[i]);
                foundPrime = true;
                break;
            }
        }

        if (!foundPrime) break;
    }

    return primes;
}

// Give an array, will return the median array.
// Returns single element for odd element #s, and two elements for even elements
getMedianArray = (array) => {

    let median = [];

    if (array.length % 2 === 0) {
        let index = array.length / 2;
        median = [array[index - 1], array[index]];
    } else {
        median = [array[Math.floor(array.length/2)]];
    }

    return median;
}