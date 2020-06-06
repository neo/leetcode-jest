/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows = Array.from({ length: numRows }, () => "");
  let row = 0,
    step = -1;
  for (const char of s) {
    rows[row] += char;
    if (row === 0 || row === numRows - 1) step *= -1;
    row += step;
  }
  return rows.join("");
};

describe("6. ZigZag Conversion", () => {
  test('s = "PAYPALISHIRING", numRows = 3', () => expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR"));
  test('s = "PAYPALISHIRING", numRows = 4', () => expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI"));
});
