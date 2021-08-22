/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var myMap = {};
  var anagramMap = {};
  var validAnagram = true;

  if (s.length == t.length) {
    for (var i = 0; i < s.length; i++) {
      if (myMap.hasOwnProperty(s[i])) {
        myMap[s[i]] += 1;
      } else {
        myMap[s[i]] = 1;
      }
    }
    // anagram map
    for (var j = 0; j < t.length; j++) {
      if (anagramMap.hasOwnProperty(t[j])) {
        anagramMap[t[j]] += 1;
      } else {
        anagramMap[t[j]] = 1;
      }
    }
    // loop over each character in T and check if it can be found in S
    // if it can be found in S then check the count
    // if the count does not match then it's not a valid anagram
    for (const [key, value] of Object.entries(myMap)) {
      if (anagramMap.hasOwnProperty(key)) {
        if (anagramMap[key] !== value) {
          validAnagram = false;
        }
      } else {
        validAnagram = false;
      }
    }
    return validAnagram;
  } else {
    validAnagram = false;
    return validAnagram;
  }
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
