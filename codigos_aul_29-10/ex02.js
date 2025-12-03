
// Arrow Function com Desestruturação de chave valor (no retorno)
/*
Neste exemplo, a arrow function getMinMax retorna duas chaves (o maior e o menor valor de um array de entrada). 
Em seguida, usamos const {maior, menor} = ... para capturar esse retorno.
*/
const getMinMax = (lista) => {
    return {
        menor : Math.min(...lista), 
        maior : Math.max(...lista)
    };
 
}

const relacao =  [25, 12, 12, 44, 14];
const {maior, menor} = getMinMax(relacao);

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);