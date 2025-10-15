let lado1 = 5
let lado2 = 5
let lado3 = 7
if (lado1 === lado2 && lado2 === lado3) {
    console.log("Equilátero")
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("Isósceles")
} else {
    console.log("Escaleno")
}
