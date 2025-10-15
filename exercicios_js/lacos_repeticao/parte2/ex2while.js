function findLargestWhile(arr) {
    if (arr.length === 0) return undefined;
    let largest = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        i++;
    }
    return largest;
}

let arr = [2, 98, 56, 45, 23, 78, 20, 6]
console.log(findLargestWhile(arr))