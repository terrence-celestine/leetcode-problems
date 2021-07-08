/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

/*
- Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
- Each letter in magazine can only bee used once in ransomNote.
*/

var canConstruct = function (ransomNote, magazine) {
  // ransomNote Map
  var ransomNoteMap = {};
  var magazineMap = {};
  var answer = false;

  // create ransom note map
  for (var i = 0; i < ransomNote.length; i++) {
    var curr = ransomNote[i];
    if (ransomNoteMap.hasOwnProperty(curr)) {
      ransomNoteMap[curr] = ransomNoteMap[curr] + 1;
    } else {
      ransomNoteMap[curr] = 1;
    }
  }

  // create magazine map
  for (var i = 0; i < magazine.length; i++) {
    var curr = magazine[i];
    if (magazineMap.hasOwnProperty(curr)) {
      magazineMap[curr] = magazineMap[curr] + 1;
    } else {
      magazineMap[curr] = 1;
    }
  }

  // after creating our map look over ransomNote map and check for letters in our magazine.
  // if the count of letters in ransom note is greater then count in magazine then set result as false and break
  // if count of letters in ransom note is less then or equal to magazine then return true
  for (const key in ransomNoteMap) {
    // check if element exists in map
    if (magazineMap.hasOwnProperty(key)) {
      if (magazineMap[key] < ransomNoteMap[key]) {
        answer = false;
        break;
      } else if (magazineMap[key] >= ransomNoteMap[key]) {
        answer = true;
      }
    } else {
      answer = false;
      break;
    }
  }
  return answer;
};

console.log(canConstruct("bcb", "cjjajdfaaeegig"));
