let valor = 80
let desconto
if (valor > 100) {
    desconto = valor * 0.1
} else if (valor >= 50) {
    desconto = valor * 0.05
} else {
    desconto = 0
}
let total = valor - desconto
console.log(`Valor com desconto: ${total}`)
