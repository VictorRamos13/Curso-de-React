
// 6. Soma de Números Ímpares (com mínimo de 1)
function sumOddNumbersDoWhile() {
    let sum = 0;
    let i = 1;
    do {
        if (i % 2 !== 0) {
            sum += i;
        }
        i++;
    } while (i <= 10);
    return sum;
}
