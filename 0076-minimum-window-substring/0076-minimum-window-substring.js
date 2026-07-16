/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";

    const map = new Map();

    // Store frequency of characters in t
    for (const ch of t) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    let left = 0;
    let count = t.length;

    let minLen = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        if (map.has(ch)) {
            if (map.get(ch) > 0) {
                count--;
            }
            map.set(ch, map.get(ch) - 1);
        }

        // Try shrinking the window
        while (count === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            const leftChar = s[left];

            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);

                if (map.get(leftChar) > 0) {
                    count++;
                }
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};