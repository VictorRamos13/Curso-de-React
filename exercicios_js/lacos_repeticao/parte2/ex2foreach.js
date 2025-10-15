function doubleValuesForEach(arr) {
    let doubledArr = [];
    arr.forEach(number => {
        doubledArr.push(number * 2);
    });
    return doubledArr;
}