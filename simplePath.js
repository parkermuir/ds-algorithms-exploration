//given a string of directories
//return the simplified version of that path
/*

"/a/b/c/.. "  /a/b
"//a//b//c" /a/b/c
"/a/b/../c/./d/../e" /a/c/e

*/

const simplePath = (string) => {

};

let a = '/a/b/c/..'; //  /a/b
let b = '//a//b//c'; // /a/b/c
let c = '/a/b/../c/./d/../e'; // /a/c/e

console.log(simplePath(a));
console.log(simplePath(b));
console.log(simplePath(c));
