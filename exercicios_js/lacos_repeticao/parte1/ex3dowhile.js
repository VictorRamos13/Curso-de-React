// 3. Primeiro Divisível por 3 e 5
function findFirstDivisibleDoWhile() {
    let num = 21;
    do {
        if (num % 3 === 0 && num % 5 === 0) {
            return num;
        }
        num++;
    } while (true);
}