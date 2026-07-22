/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {

    const sortDigits = (num) =>
        String(num).split("").sort().join("");

    const target = sortDigits(n);

    for (let i = 0; i <= 30; i++) {
        if (sortDigits(1 << i) === target) {
            return true;
        }
    }

    return false;
};