function findSmallestDoWhile(arr) {
    if (arr.length === 0) return undefined;
    let smallest = arr[0];
    let i = 1;
    do {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
        i++;
    } while (i < arr.length);
    return smallest;
}