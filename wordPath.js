//#127


/*
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, words) {
  let visited = {};
  visited[beginWord] = true;
  let q = [beginWord];
  let count = 1;

  while (q.length > 0) {
    let size = q.length;

    for (let w = 0; w < size; w++) {
      let word = q.shift();
      for (let i = 0; i < words.length; i++) {
        if (word === endWord) {
          return count;
        }

        if (!visited.hasOwnProperty(words[i])) {
          if (oneEdit(word, words[i])) {
            q.push(words[i])
            visited[words[i]] = true;
          }
        }
      }
    }
    count++
  }

  return 0;
};

const oneEdit = (word1, word2) => {
  let diffs = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffs++
    }
  }

  return diffs === 1;
}