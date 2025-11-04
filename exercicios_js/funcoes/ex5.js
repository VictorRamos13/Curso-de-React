function contarVogais(palavra) {
  const vogais = "aeiou";
  let contador = 0;
  palavra = palavra.toLowerCase()
  palavra = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

  for (let letra of palavra) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVogais("Curso React"));
