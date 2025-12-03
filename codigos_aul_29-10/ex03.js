
// Arrow Function com Desestruturação de Array (no retorno)
/*
Neste exemplo, a arrow function getMinMax retorna um array com dois valores (o maior e o menor valor de um array de entrada). 
Em seguida, usamos const [menor, maipr] = ... para capturar esse retorno.
*/
const getMinMax = (v1, v2, v3, v4, v5) => {
    return {
        menor : Math.min(v1, v2, v3, v4, v5), 
        maior : Math.max(v1, v2, v3, v4, v5)
    };
 
}

const relacao =  [25, 12, 12, 44, 14];
const {maior, menor} = getMinMax.apply(null, relacao);

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);