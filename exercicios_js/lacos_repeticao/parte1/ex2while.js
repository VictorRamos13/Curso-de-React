function sumEvenNumbersWhile() {
    let sum = 0;
    let i = 1;
    while (i <= 50) {
        if (i % 2 === 0) {
            sum += i;
        }
        i++;
    }
    return sum;
}