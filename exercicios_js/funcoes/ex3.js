function parImpar(n) {
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

const n1 = parImpar(2);
const n2 = parImpar(1)

console.log("n1 é: ", n1); 
console.log("n2 é: ", n2);
