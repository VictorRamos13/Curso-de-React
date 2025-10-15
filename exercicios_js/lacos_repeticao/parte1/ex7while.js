function fibonacciWhile() {
    let output = [];
    let a = 0, b = 1;
    while (a <= 50) {
        output.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return output;
}