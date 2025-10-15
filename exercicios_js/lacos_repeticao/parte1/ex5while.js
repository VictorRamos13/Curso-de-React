function powersOfTwoWhile() {
    let output = [];
    let power = 1;
    let i = 0;
    while (power <= 1000) {
        output.push(power);
        power = Math.pow(2, ++i);
    }
    return output;
}