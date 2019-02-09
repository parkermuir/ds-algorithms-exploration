//#56

/*
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a.start - b.start;
  })

  let results = [];
  for (let i = 0; i < intervals.length; i++) {
    if (i === 0) {
      results.push(intervals[i])
    }
    let curr = intervals[i];
    let prev = results.pop();

    if (prev.end >= curr.start) {
      let temp = new Interval(prev.start, Math.max(prev.end, curr.end))
      results.push(temp);
    } else {
      results.push(prev, curr);
    }
  }
  return results;
};