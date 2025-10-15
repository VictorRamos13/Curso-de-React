function countVowelsFor(arr) {
    let totalVowels = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];
        for (let j = 0; j < str.length; j++) {
            if (vowels.includes(str[j])) {
                totalVowels++;
            }
        }
    }
    return totalVowels;
}