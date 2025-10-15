
// 5. Geração de Caracteres
function generateCharsDoWhile() {
    let output = [];
    let charCode = 'a'.charCodeAt(0);
    do {
        output.push(String.fromCharCode(charCode));
        charCode++;
    } while (charCode <= 'e'.charCodeAt(0));
    return output;
}
