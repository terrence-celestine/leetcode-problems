## Ransom Note - Answer

Problem: https://leetcode.com/problems/ransom-note

1. We know that the magazine needs to have enough letters to make our ransom note. 
2. So I started by creating a map of the ransom note and the magazine argument.
   1. Each key in the map will have a value that is the character count.

```js
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
```

1. Next we loop through the ransomNoteMap and check against the magazineMap
   1. If the magazineMap **does not** contain a key found in ransomNoteMap then we stop our loop.
   2. If the magazineMap **does** contain the key found in ransomNoteMap
      1. If our magazineMap is less than our ransomNoteMap then we return false.
         1. Else if our magazineMap is greater than **or** equal to our ransomNoteMap then we set our answer flag to true.

```js
  for (const key in ransomNoteMap) {

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
```

