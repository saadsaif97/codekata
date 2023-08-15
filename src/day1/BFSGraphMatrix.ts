declare type WeightedAdjacencyMatrix = number[][]; // A number means weight

export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  const prev = new Array(graph.length).fill(-1)
  const seen = new Array(graph.length).fill(false)
  
  seen[source] = true
  const q = [source]
  
  do {
    
    const curr = q.shift() as number
    const vertex = graph[curr]
    
    if (curr == needle) break
    
    for (let i = 0; i < vertex.length; i++) {
      const conn = vertex[i]
      
      if (conn == 0) continue
      if (seen[i]) continue
      
      seen[i] = true
      prev[i] = curr
      q.push(i)
    }
  } while (q.length);
  
  const path = []
  // build it backwards
 let curr = needle
 while (prev[curr] !== -1) {
  path.push(prev[curr])
  curr = prev[curr]
 }
 
 if (path.length) {
  console.log(([needle, ...path]).reverse())
  return ([needle, ...path]).reverse();
 }
  
  return null
}



//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
export const matrix2: WeightedAdjacencyMatrix = [
  [0, 3, 1,  0, 0, 0, 0], // 0
  [0, 0, 0,  0, 1, 0, 0],
  [0, 0, 7,  0, 0, 0, 0],
  [0, 0, 0,  0, 0, 0, 0],
  [0, 1, 0,  5, 0, 2, 0],
  [0, 0, 18, 0, 0, 0, 1],
  [0, 0, 0,  1, 0, 0, 1],
];


bfs(matrix2, 0, 6) // [ 0, 1, 4, 5, 6, ]
