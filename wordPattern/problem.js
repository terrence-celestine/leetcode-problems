/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// Original Solution - Slow
var wordPattern = function (pattern, s) {
  var patternMap = {};
  var wordMap = {};
  var words = s.split(" ");
  // keep going if both pattern and string have the same length
  if (pattern.split("").length == words.length) {
    for (var i = 0; i < pattern.split("").length; i++) {
      if (patternMap.hasOwnProperty(pattern[i])) {
        if (wordMap[words[i]] !== pattern[i]) {
          return false;
        } else {
          continue;
        }
      } // check if the word is mismatched with the pattern
      else if (
        wordMap.hasOwnProperty(words[i]) &&
        wordMap[words[i]] !== pattern[i]
      ) {
        return false;
      } else {
        patternMap[pattern[i]] = [];
        patternMap[pattern[i]].push(words[i]);
        wordMap[words[i]] = pattern[i];
      }
    }
    return true;
  } else {
    // length does not match
    return false;
  }
};

// Optimal Solution from Discuss
var wordPattern = function (pattern, str) {
  const strArr = str.split(" ");
  if (pattern.length !== strArr.length) return false;
  const patMap = new Map();
  const strMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (
      (patMap.has(pattern[i]) && patMap.get(pattern[i]) !== strArr[i]) ||
      (strMap.has(strArr[i]) && strMap.get(strArr[i]) !== pattern[i])
    ) {
      return false;
    }
    patMap.set(pattern[i], strArr[i]);
    strMap.set(strArr[i], pattern[i]);
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog")); // return true
console.log(wordPattern("abba", "dog dog dog dog")); // return false
console.log(wordPattern("aaaa", "dog dog dog dog")); // return true
console.log(wordPattern("aaaa", "dog cat cat fish")); // return false
console.log(wordPattern("abc", "dog cat dog")); // return false
