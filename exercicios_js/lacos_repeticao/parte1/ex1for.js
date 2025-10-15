
// 1. Tabuada Fixa
function multiplicationTableFor() {
    let output = [];
    const num = 7;
    for (let i = 1; i <= 10; i++) {
        output.push(`${num} x ${i} = ${num * i}`);
    }
    return output;
}
