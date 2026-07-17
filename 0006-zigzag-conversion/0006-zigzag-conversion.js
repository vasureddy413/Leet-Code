var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;

    const rows = new Array(numRows).fill("");

    let currRow = 0;
    let goingDown = false;

    for (const ch of s) {
        rows[currRow] += ch;

        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};