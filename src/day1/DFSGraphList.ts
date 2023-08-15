declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];
function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
  
  if (seen[curr]) return false
  console.log(curr)
  seen[curr] = true
  
  // pre
  path.push(curr)
  if (curr == needle) {
    return true
  }
  
  // recurse
  let vertex = graph[curr]
  for (let point = 0; point < vertex.length; point++) {
    const edge = vertex[point];
    
    if (walk(graph, edge.to, needle, seen, path)) {
      return true
    }
  }
  
  
  // post
  path.pop()
  
  return false
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
  
  const seen: boolean[] = new Array(graph.length).fill(false)
  const path: number[] = []
  
  walk(graph, source, needle, seen, path)
  
  if (path.length) {
    return path
  }
  
  return null
}

const list2: WeightedAdjacencyList = [];

list2[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
list2[1] = [
    { to: 4, weight: 1 },
];
list2[2] = [
    { to: 3, weight: 7 },
];
list2[3] = [ ];
list2[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
list2[5] = [
    { to: 2, weight: 18 },
    { to: 6, weight: 1 },
];
list2[6] = [
    { to: 3, weight: 1 },
];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)

dfs(list2, 0, 6)
