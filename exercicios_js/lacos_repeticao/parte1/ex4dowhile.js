function simulatedConditionDoWhile() {
    let output = [];
    let counter = 0;
    do {
        output.push(counter);
        counter++;
    } while (counter <= 3);
    return output;
}

