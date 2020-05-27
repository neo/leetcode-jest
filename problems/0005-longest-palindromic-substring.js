/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  const expanded = `#${s.split("").join("#")}#`;

  function growPalindrome(fromIndex, fromLength) {
    let start = fromIndex - 1 - fromLength;
    let end = fromIndex + 1 + fromLength;
    let localLongest = expanded.slice(start + 1, end);
    while (expanded[start] !== undefined && expanded[start] === expanded[end]) {
      localLongest = expanded.slice(start, end + 1);
      start--;
      end++;
    }
    return localLongest;
  }

  const p = Array.from(expanded, () => 0);
  for (let i = 0, knownRange = 0; i < p.length; i++) {
    const len = (growPalindrome(i, p[i]).length - 1) / 2;
    knownRange = i + len;
    for (let j = 1; j <= len; j++) {
      if (i + j + p[i - j] <= knownRange) p[i + j] = p[i - j];
    }
    p[i] = len;
  }
  const maxLengthIndex = p.reduce((max, current, index) => (p[max] < current ? index : max), 0);
  return s.substr((maxLengthIndex - p[maxLengthIndex]) / 2, p[maxLengthIndex]);
};

describe("5. Longest Palindromic Substring", () => {
  test("babad", () => expect(longestPalindrome("babad")).toBe("bab"));
  test("cbbd", () => expect(longestPalindrome("cbbd")).toBe("bb"));
  test("a", () => expect(longestPalindrome("a")).toBe("a"));
  test("ac", () => expect(longestPalindrome("ac")).toBe("a"));
  test("", () => expect(longestPalindrome("")).toBe(""));
  test("bb", () => expect(longestPalindrome("bb")).toBe("bb"));
});
