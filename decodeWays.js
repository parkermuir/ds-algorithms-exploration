// #91

/*
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  //only 10 to 26 are valid ways of decoding 2 digits

  //recurse with remaining string window

  //two paths
  //recurse with single digit
  //recurse with two digits

  let total = 0;

  const decode = (start) => {
    if (s[start] === "0") {
      return
    }

    if (start >= s.length - 1) {
      total++;
      return;
    }

    let digit = parseInt(s.substring(start, start + 1))
    console.log({ digit })
    if (digit !== 0) {
      decode(start + 1);
    }

    let num = parseInt(s.substring(start, start + 2))
    if (num > 0 && num <= 26) {
      decode(start + 2);
    }
  }


  decode(0)
  return total
};