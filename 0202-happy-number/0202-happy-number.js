/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const h = new Set();

    while (n !== 1) {
        if (h.has(n)) {
            return false;
        }

        h.add(n);

        let sum = 0;

        while (n > 0) {
            let d = n % 10;
            sum += d * d;
            n = Math.floor(n / 10);
        }

        n = sum;
    }

    return true;
};