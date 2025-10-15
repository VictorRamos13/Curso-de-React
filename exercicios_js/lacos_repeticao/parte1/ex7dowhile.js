// 7. Loop com Saída Condicional
function conditionalExitDoWhile() {
    let output = [];
    let randomValue;
    do {
        randomValue = Math.random();
        output.push(randomValue);
    } while (randomValue >= 0.1);
    return output;
}