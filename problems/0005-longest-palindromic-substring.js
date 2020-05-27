/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  const memo = {};
  function isPalindromic(potential) {
    if (potential in memo) return memo[potential];
    if (potential.length <= 1) return (memo[potential] = true);
    if (potential[0] !== potential[potential.length - 1]) return (memo[potential] = false);
    return (memo[potential] = isPalindromic(potential.slice(1, potential.length - 1)));
  }

  let longest = s[0];
  for (let start = 0; start <= s.length - 2; start++) {
    for (let end = s.length; end >= start + 2; end--) {
      const potential = s.slice(start, end);
      if (potential.length > longest.length && isPalindromic(potential)) {
        longest = potential;
      }
    }
  }
  return longest;
};

describe("5. Longest Palindromic Substring", () => {
  test("babad", () => expect(longestPalindrome("babad")).toBe("bab"));
  test("cbbd", () => expect(longestPalindrome("cbbd")).toBe("bb"));
  test("a", () => expect(longestPalindrome("a")).toBe("a"));
  test("ac", () => expect(longestPalindrome("ac")).toBe("a"));
  test("", () => expect(longestPalindrome("")).toBe(""));
});
