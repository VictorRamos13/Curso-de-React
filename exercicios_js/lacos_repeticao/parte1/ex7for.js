function findPrimesFor() {
    let output = [];
    for (let num = 2; num <= 20; num++) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            output.push(num);
        }
    }
    return output;
}