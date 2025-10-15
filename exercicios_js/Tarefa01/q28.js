let num1 = 10
let num2 = 5
let operacao = '+'
let resultado
switch (operacao) {
    case '+':
        resultado = num1 + num2
        break
    case '-':
        resultado = num1 - num2
        break
    case '*':
        resultado = num1 * num2
        break
    case '/':
        resultado = num1 / num2
        break
    default:
        console.log("Operação inválida")
        break
}
console.log(`Resultado: ${resultado}`)
