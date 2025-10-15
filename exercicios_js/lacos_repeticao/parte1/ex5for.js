
// 5. Padrão de Asteriscos (Triângulo)
function asteriskTriangleFor() {
    let output = [];
    for (let i = 1; i <= 5; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        output.push(row);
    }
    return output;
}
