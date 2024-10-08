function isPrime(num) {
    
    if (num < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const number = 23;
if (isPrime(number)) {
    console.log(`${number} jest liczbą pierwszą.`);
} else {
    console.log(`${number} nie jest liczbą pierwszą.`);
}