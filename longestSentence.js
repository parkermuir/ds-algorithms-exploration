

let sentence = ' Hi, how   are you  today .... this is a     test !';

let longestSentence = (string) => {
  console.log(string.split(' ').filter( el => el.length > 0));
};


//space flag
//ascii code of 32, update space flag


//go through string and manipulate all spaces in a row to be single spaces

longestSentence(sentence);