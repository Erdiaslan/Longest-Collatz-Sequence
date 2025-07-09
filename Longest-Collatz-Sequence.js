function collatzLength(n, memo = {}) {
    let original = n;
    let length = 1;
    while (n !== 1) {
        if (memo[n]) {
            length += memo[n] - 1;
            break;
        }
        n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
        length++;
    }
    memo[original] = length;
    return length;
}

let maxLength = 0;
let number = 0;
let memo = {};

for (let i = 1; i < 1_000_000; i++) {
    let len = collatzLength(i, memo);
    if (len > maxLength) {
        maxLength = len;
        number = i;
    }
}

console.log(`En uzun Collatz zincirini üreten sayı: ${number}, Uzunluk: ${maxLength}`);
