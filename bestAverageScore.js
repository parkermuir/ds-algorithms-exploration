/*
Best Average Score

Given student scores, which may contain multiple scores per student, 
return the highest average score among the students.

Note: Average must be an integer - floor the average if average is not an integer.
Note 2: Scores can be positive or negative integers.


Example:

[["Robert", "50"],
 ["Bob", "81"],
 ["James", "66"]
 ["Charles", "75"]
 ["Bob", "99"]]
 
Result: 90
*/

let example = [
  ['Robert', '50'],
  ['Bob', '81'],
  ['James', '66'],
  ['Charles', '75'],
  ['Bob', '99']
];

const highestAverage = ( scores ) => {
  let students = {};
  let high = 0;
  for (let i = 0; i < scores.length; i++) {
    const name = scores[i][0];
    const score = scores[i][1];
    if (!students[name]) {
      students[name] = {
        total: Number(score),
        count: 1
      };
    } else {
      students[name]['total'] += Number(score);
      students[name]['count'] += 1;
    }
    let average = students[name]['total'] / students[name]['count'];
    high = Math.floor(Math.max(high, average));
  }
  return high;
};

console.log(highestAverage(example)); // 90