var selfDividingNumbers = function (left, right) {
  var result = [];
  // create a for loop that starts at the left value and goes up until the right value
  // on each iteration we loop through each digit and see if the value divided by the digit equals 0
  // e.g. 128 % 1 === 0
  for (var i = left; i <= right; i++) {
    var currentDigits = String(i).split("");
    if (currentDigits.includes("0")) {
      continue;
    }
    for (var j = 0; j < currentDigits.length; j++) {
      var currentVal = Number(currentDigits[j]);
      if (i % currentVal == 0) {
        answer = true;
      } else {
        answer = false;
        break;
      }
    }
    if (answer === true) {
      result.push(i);
    }
  }
  return result;
};
