function toUpperCaseForEach(arr) {
    let upperCaseArr = [];
    arr.forEach(str => {
        upperCaseArr.push(str.toUpperCase());
    });
    return upperCaseArr;
}