/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  let longest = s[0];

  function growPalindrome(fromIndex, fromGap) {
    let start = fromIndex - 1;
    let end = fromIndex + fromGap;
    let localLongest = s[fromIndex];
    while (s[start] !== undefined && s[start] === s[end]) {
      localLongest = s.slice(start, end + 1);
      start--;
      end++;
    }
    return localLongest;
  }

  for (let i = 1; i < s.length; i++) {
    const fromGap = growPalindrome(i, true);
    const fromChar = growPalindrome(i, false);
    if (fromGap.length > longest.length) longest = fromGap;
    if (fromChar.length > longest.length) longest = fromChar;
  }

  return longest;
};

describe("5. Longest Palindromic Substring", () => {
  test("babad", () => expect(longestPalindrome("babad")).toBe("bab"));
  test("cbbd", () => expect(longestPalindrome("cbbd")).toBe("bb"));
  test("a", () => expect(longestPalindrome("a")).toBe("a"));
  test("ac", () => expect(longestPalindrome("ac")).toBe("a"));
  test("", () => expect(longestPalindrome("")).toBe(""));
  test("bb", () => expect(longestPalindrome("bb")).toBe("bb"));
});
