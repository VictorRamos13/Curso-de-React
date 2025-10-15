function sumArrayDoWhile(arr) {
    let sum = 0;
    let i = 0;
    if (arr.length === 0) return 0; // Handle empty array case
    do {
        sum += arr[i];
        i++;
    } while (i < arr.length);
    return sum;
}