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
  ['Bob', '100'],
  ['James', '66'],
  ['Charles', '75'],
  ['Bob', '90']
];

const highestAverage = ( scores ) => {
  let students = {};
  for (let i = 0; i < scores.length; i++) {
    const name = scores[i][0];
    const score = Number(scores[i][1]);
    if (!students[name]) {
      students[name] = [];
    }
    students[name].push(score);
  }
  console.log(students);
  
  let maxAverage = 0;
  for (var key in students) {
    let scoreGroup = students[key];
    let average = scoreGroup.reduce((acc, score, i) => {
      acc += score;
      if (i === scoreGroup.length - 1) {
        return acc / scoreGroup.length;
      }
      return acc;
    });
    if (average > maxAverage) {
      maxAverage = average;
    }
  }
  return Math.floor(maxAverage);
};
console.log(highestAverage(example)); // 90


//Alon whiteboarding

// let example2 = [
//   ['Robert', 50],
//   ['Bob', 81],
//   ['James', 66],
//   ['Charles', 75],
//   ['Bob', 99]
// ];


// const students = (students) => {
//   var hash = {};
//   for (let i = 0; i < students.length; i++) {
//     if (!hash[students[i][0]]) {
//       hash[students[i][0]] = [];
//     }
//     hash[students[i][0]].push(+(students[i][1]));
    
//     for (var key in hash) {
//       for (let i = 0; i < hash[key]; i++) {
//         if (hash[key].length === 1) {
          
//         } else {
//           var temp = 0;
//           for (let i = 0; i < hash[key]; i++) {
//             temp += hash[key][i];
//           }
//           hash[key] = temp / hash[key].length;
//         }
//       }
//     }
//   }
//   console.log(hash);
//   return Math.max(Object.values(hash));
// };

// console.log(students(example)); // 90
