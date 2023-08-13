function walk(head: BinaryNode<number> | null, path: number[]): number[] {
  if(!head) return path
  
  // pre
  
  // recurse
  walk(head.left, path)
  path.push(head.value)
  console.log({head})
  walk(head.right, path)
  // post
  return path
}


export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, [])
}