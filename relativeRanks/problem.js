/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let answer = [];
  let count = 0;
  let q = {};
  let sortedScore = [...score];
  sortedScore = sortedScore.sort(function (a, b) {
    return b - a;
  });
  for (const s of sortedScore) {
    count += 1;
    if (count == 1) {
      q[s] = "Gold Medal";
    } else if (count == 2) {
      q[s] = "Silver Medal";
    } else if (count == 3) {
      q[s] = "Bronze Medal";
    } else {
      q[s] = String(count);
    }
  }
  // loop over original score array to find the correct order
  for (const s of score) {
    answer.push(q[s]);
  }
  return answer;
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
