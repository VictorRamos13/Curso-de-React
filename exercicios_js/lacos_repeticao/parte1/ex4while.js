function reverseNumberWhile(num) {
    let reversed = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        reversed = reversed * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    return reversed;
}