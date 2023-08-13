function walk(head: BinaryNode<number> | null, path: number[]): number[] {
  if(!head) return path
  
  // pre
  
  // recurse
  walk(head.left, path)
  walk(head.right, path)
  // post
  path.push(head.value)
  console.log({head})
  return path
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, [])
}