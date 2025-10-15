function multiplyByFactorFor(arr, factor) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * factor);
    }
    return newArr;
}