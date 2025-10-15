function filterEvenDoWhile(arr) {
    let evenNumbers = [];
    let i = 0;
    if (arr.length === 0) return evenNumbers;
    do {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
        i++;
    } while (i < arr.length);
    return evenNumbers;
}