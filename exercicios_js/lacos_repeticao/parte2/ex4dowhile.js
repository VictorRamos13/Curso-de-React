function searchElementDoWhile(arr, value) {
    let found = false;
    let i = 0;
    if (arr.length === 0) return false;
    do {
        if (arr[i] === value) {
            found = true;
            break;
        }
        i++;
    } while (i < arr.length);
    return found;
}
