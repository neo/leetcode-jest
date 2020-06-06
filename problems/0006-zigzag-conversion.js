/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const table = Array.from({ length: numRows }, () => []);
  const group = 2 * numRows - 2;
  Array.from(s).forEach((char, index) => {
    const mod = index % group;
    const row = mod < numRows ? mod : group - mod;
    table[row].push(char);
  });
  return table.flat().join("");
};

describe("6. ZigZag Conversion", () => {
  test('s = "PAYPALISHIRING", numRows = 3', () => expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR"));
  test('s = "PAYPALISHIRING", numRows = 4', () => expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI"));
});
