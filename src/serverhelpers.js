getAllPrimes = (num) => {
    
    if (num < 2) return [];

    let allNums = [];
    let primes = [2];
    let markedP = [];

    for (let i = 2; i <= num; i++) {
        allNums.push(i);
    }

    let p = 2;

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