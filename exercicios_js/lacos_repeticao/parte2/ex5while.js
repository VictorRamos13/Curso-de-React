function removeDuplicatesWhile(arr) {
    let uniqueArr = [];
    let i = 0;
    while (i < arr.length) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
        i++;
    }
    return uniqueArr;
}

let arr = ['oi', 'dois', 'tres', 'oi', 7, 8, 52, 8, 7, 7, 'dois', 'tres'];
console.log(removeDuplicatesWhile(arr));