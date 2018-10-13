let words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat', 'tab'];

const groupAnagrams = (words) => {
  let results = {};

  words.forEach((word) => {
    let sortedWord = word.split('').sort().join();
    
    if (results.hasOwnProperty(sortedWord)) {
      results[sortedWord].push(word);
    } else {
      results[sortedWord] = [word];
    }
  });

  return Object.values(results);
};

console.log(groupAnagrams(words)); //   [["ate","eat","tea"], ["nat","tan"], ["bat"]]