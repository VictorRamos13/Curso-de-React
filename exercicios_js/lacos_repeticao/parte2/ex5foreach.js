function filterByLengthForEach(arr) {
    let filteredArr = [];
    arr.forEach(str => {
        if (str.length > 5) {
            filteredArr.push(str);
        }
    });
    return filteredArr;
}