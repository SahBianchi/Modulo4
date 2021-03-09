// 1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
// array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

let array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

let reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer));

function soma(...array){
    let inicio = 0
    for (const i of array){
        inicio += i
    }
    return inicio
}
console.log(soma(...array))