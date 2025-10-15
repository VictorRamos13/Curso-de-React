function countOccurrencesWhile(arr, searchString) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == searchString) {
            count++;
        }
        i++;
    }
    return count;
}

let arr = ['oi', 'oi', 'pi', 'pi', 'dois', 'tres'];
let searchString = ['oi'];
console.log(countOccurrencesWhile(arr, searchString));