// # 787
/*
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

var findCheapestPrice = function (n, flights, src, dst, K) {
  const graph = createGraph(flights);
  let q = [[src, 0, K + 1]];

  while (q.length > 0) {
    let [city, pathCost, stops] = q.shift();

    if (city === dst) {
      return pathCost;
    } else {
      if (stops > 0) {
        if (graph.hasOwnProperty(city)) {
          graph[city].forEach((dest) => {
            //push to q next city, updated path cost, stops remaining
            q.push([dest[0], pathCost + dest[1], stops - 1])
          });
        }

        q.sort((a, b) => {
          return a[1] - b[1];
        });
      }
    }
  }

  return -1;
  //return cost or -1 if route doesn't exist
};

const createGraph = (flights) => {
  let graph = {};

  flights.forEach((flight) => {
    let [start, dest, price] = flight;
    if (graph.hasOwnProperty(start)) {
      graph[start].push([dest, price]);
    } else {
      graph[start] = [[dest, price]];
    }
  });
  return graph;
};