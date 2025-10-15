function sumDigitsWhile(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    return sum;
}

