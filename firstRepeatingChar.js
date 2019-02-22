//#387

/*
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = {}

  for (var i = 0; i < s.length; i++) {
    if (!hash.hasOwnProperty(s[i])) {
      hash[s[i]] = i
    } else {
      hash[s[i]] = 'repeat'
    }
  }

  let min = Infinity

  for (key in hash) {
    if (typeof hash[key] === 'number' && hash[key] < min) {
      min = hash[key]
    }
  }

  if (min === Infinity) {
    return -1
  } else {
    return min;
  }

};


var firstUniqCharII = function(s) {
  var chars = [];
  var i;
  for (i = 0; i < s.length; i++) {
      chars[s.charCodeAt(i)] = chars[s.charCodeAt(i)] ? chars[s.charCodeAt(i)] + 1 : 1;
  }

  console.log(chars);
  
  for (i = 0; i < s.length; i++) {
      if (chars[s.charCodeAt(i)] === 1) {
          return i;
      }
  }
  
  return -1;
};

console.log(firstUniqCharII('ilovelucyi'));