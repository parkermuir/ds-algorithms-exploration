/*

You are given a DOM tree and have to analyze the <ul> and <ol> list tags within it. Your task is to find the maximum depth of nested <ul>/<ol> list tags. A single <ul>/<ol> list is nested one level deep. Each <ul>/<ol> list inside another <ul>/<ol> list is nested one level deeper. If there are no <ul> or <ol> lists at all in the DOM tree, the depth of nesting is 0.

Note that <ul>/<ol> lists can be nested directly or indirectly; that is, a <ul> list inside a table inside an <ol> list is nested two levels deep.


Write a function:

  function solution();
that, given a DOM tree, returns the maximum depth of nested <ul>/<ol> lists.

Assume that:

the DOM tree represents a valid HTML5 document;
length of the HTML document does not exceed 4KB;
jQuery 2.1 is supported.

*/


var maxDepth = (html) => {
  let max = 0;

  const dfs = (node, depth) => {
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        let tag = child.tagName;
        if (tag === 'UL' || tag === 'OL') {
          dfs(child, depth + 1);
        } else {
          dfs(child, depth);
        }
      }
    } else {
      if (depth > max) {
        max = depth;
      }
    }
  };

  dfs(html, 0);
  return max;
};


