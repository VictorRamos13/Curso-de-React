function sumArrayWhile(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

let arr = [40, 22, 30, 17, 20, 13]
console.log(sumArrayWhile(arr))