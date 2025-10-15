let distancia = 150
let preco
if (distancia <= 100) {
    preco = distancia * 0.5
} else {
    preco = distancia * 0.4
}
console.log(`Preço da passagem: R$ ${preco}`)
