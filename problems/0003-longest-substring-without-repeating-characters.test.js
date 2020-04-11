/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || !s.length) {
    return 0;
  }
  return s.split("").reduce(
    (result, char) => {
      if (result.current.includes(char)) {
        result.current = result.current.slice(result.current.indexOf(char) + 1);
      }
      result.current += char;
      if (result.current.length > result.longest.length) {
        result.longest = result.current;
      }
      return result;
    },
    { longest: "", current: "" },
  ).longest.length;
};

test("3. Longest Substring Without Repeating Characters", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("au")).toBe(2);
  expect(lengthOfLongestSubstring("dvdf")).toBe(3);
});
