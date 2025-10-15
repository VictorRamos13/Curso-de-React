
// 2. Números Ímpares
function oddNumbersFor() {
    let output = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            output.push(i);
        }
    }
    return output;
}
