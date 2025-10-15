function fillArrayDoWhile() {
    let arr = [];
    let i = 0;
    do {
        arr.push(i + 1); // Adding sequential numbers 1 to 5
        i++;
    } while (i < 5);
    return arr;
}

console.log(fillArrayDoWhile());