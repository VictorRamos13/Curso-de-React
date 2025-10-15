function findFirstMultipleWhile() {
    let num = 101;
    while (true) {
        if (num % 13 === 0) {
            return num;
        }
        num++;
    }
}