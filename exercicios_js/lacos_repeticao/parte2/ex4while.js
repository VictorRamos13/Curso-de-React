function reverseArrayWhile(arr) {
    let reversedArr = [];
    let i = arr.length - 1;
    while (i >= 0) {
        reversedArr.push(arr[i]);
        i--;
    }
    return reversedArr;
}

let arr = ['oi', 2, 3, 'pobre'];
console.log(reverseArrayWhile(arr));