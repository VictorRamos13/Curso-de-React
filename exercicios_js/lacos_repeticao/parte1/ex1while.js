function countdownWhile() {
    let output = [];
    let i = 10;
    while (i >= 0) {
        if (i === 0) {
            output.push("Fogo!");
        } else {
            output.push(i);
        }
        i--;
    }
    return output;
}