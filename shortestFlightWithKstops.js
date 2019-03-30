/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  const graph = createGraph(flights);

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
}