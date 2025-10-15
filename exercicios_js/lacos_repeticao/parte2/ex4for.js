function isPalindromeFor(arr) {
    const word = arr.join('');
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}