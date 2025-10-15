let a = 1
let b = -5
let c = 6
let delta = b * b - 4 * a * c
if (delta >= 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log(`As raízes são ${x1} e ${x2}`)
} else {
    console.log("Não há raízes reais")
}
