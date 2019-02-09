//#71

/*
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let dirs = path.split('/').filter((dir) => dir.length > 0)

  let stack = [];
  dirs.forEach((dir) => {
    if (dir === '.') {
      return
    } else if (dir === '..') {
      stack.pop();
    } else {
      stack.push(dir)
    }
  })

  return '/' + stack.join('/');
};