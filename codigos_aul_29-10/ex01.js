// Arrow Function com Desestruturação de Array (no retorno)
/*
Neste exemplo, a arrow function getMinMax retorna um array com dois valores (o maior e o menor valor de um array de entrada). 
Em seguida, usamos const [menor, maior] = ... para capturar esse retorno.
*/

const getMinMax = (lista) => {
    return [Math.min(...lista), Math.max(...lista)];
}

const relacao =  [25, 12, 12, 44, 14];
const [menor, maior] = getMinMax(relacao);

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);