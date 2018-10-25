/*You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

*/

const compare = (j, s) => {
  let map = {};
  let count = 0;
  let jewels = j.split('');
  let stones = s.split('');

  for (let i = 0; i < jewels.length; i++) {
    map[jewels[i]] = null;
  }

  for (let i = 0; i < stones.length; i++ ) {
    if (map.hasOwnProperty(stones[i])) {
      count++;
    }
  }
  return count;
};

let J = 'aA';
let S = 'aAAbbbb';

let J2 = 'z';
let S2 = 'ZZ';
console.log(compare(J, S)); // 3
console.log(compare(J2, S2)); // 0


//leet code special
function numJewelsInStones(J, S) {
  return S.split('').filter((s) => J.includes(s)).length;
}