/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  const expanded = `#${s.split("").join("#")}#`;

  function growPalindrome(fromIndex, fromLength = 1) {
    let start = fromIndex - fromLength;
    let end = fromIndex + fromLength;
    let localLongest = expanded[fromIndex];
    while (expanded[start] !== undefined && expanded[start] === expanded[end]) {
      localLongest = expanded.slice(start, end + 1);
      start--;
      end++;
    }
    return localLongest;
  }

  const p = Array.from(expanded, (_, index) => growPalindrome(index).length);
  const maxIndex = p.reduce((max, current, index) => (p[max] < current ? index : max), 0);
  const longestLength = (p[maxIndex] - 1) / 2;
  const longestStart = (maxIndex - longestLength) / 2;
  return s.slice(longestStart, longestStart + longestLength);
};

describe("5. Longest Palindromic Substring", () => {
  test("babad", () => expect(longestPalindrome("babad")).toBe("bab"));
  test("cbbd", () => expect(longestPalindrome("cbbd")).toBe("bb"));
  test("a", () => expect(longestPalindrome("a")).toBe("a"));
  test("ac", () => expect(longestPalindrome("ac")).toBe("a"));
  test("", () => expect(longestPalindrome("")).toBe(""));
  test("bb", () => expect(longestPalindrome("bb")).toBe("bb"));
});
