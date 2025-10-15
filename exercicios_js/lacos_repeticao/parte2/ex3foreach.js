function calculateAverageForEach(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    arr.forEach(number => {
        sum += number;
    });
    return sum / arr.length;
}