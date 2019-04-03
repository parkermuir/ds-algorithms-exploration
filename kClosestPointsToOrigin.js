//#973

/*
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  const start = [0, 0]

  points.sort((a, b) => {
    return getDistance(start, a) - getDistance(start, b)
  })

  return points.slice(0, K)

};

const getDistance = (start, coord) => {
  let x = Math.pow(coord[0] - start[0], 2);
  let y = Math.pow(coord[1] - start[1], 2);

  return Math.sqrt(x + y)
}
