/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const memo = {};
  function breakStringIntoWordGroups(s) {
    if (!(s in memo)) {
      memo[s] = wordDict
        .filter(word => s.startsWith(word))
        .reduce((groups, word) => {
          if (word === s) {
            return groups.concat([[word]]);
          }
          return groups.concat(breakStringIntoWordGroups(s.slice(word.length)).map(group => [word, ...group]));
        }, []);
    }
    return memo[s];
  }
  return breakStringIntoWordGroups(s).map(group => group.join(" "));
};

describe("140. Word Break II", () => {
  test("catsanddog", () =>
    expect(new Set(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]))).toEqual(
      new Set(["cats and dog", "cat sand dog"]),
    ));

  test("pineapplepenapple", () =>
    expect(new Set(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]))).toEqual(
      new Set(["pine apple pen apple", "pineapple pen apple", "pine applepen apple"]),
    ));

  test("catsandog", () =>
    expect(new Set(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))).toEqual(new Set([])));

  test("one", () => expect(new Set(wordBreak("one", ["one"]))).toEqual(new Set(["one"])));
});
