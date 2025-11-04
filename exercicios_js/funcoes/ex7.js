function verificarPalindromo(palavra) {
  const normalizada = palavra.toLowerCase().replace(/\s/g, '');
  const invertida = normalizada.split('').reverse().join('');
  return normalizada === invertida;
}

sim = verificarPalindromo("reviver");
nao = verificarPalindromo("JavaScript")

console.log("A palavra reviver é um palíndromo!");       
console.log("A palavra JavaScript não é um palíndromo!");
