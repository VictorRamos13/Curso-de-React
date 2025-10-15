function replaceGreaterThanTenFor(arr) {
    let newArr = [...arr]; // Create a copy to avoid modifying original array directly
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > 10) {
            newArr[i] = 0;
        }
    }
    return newArr;
}