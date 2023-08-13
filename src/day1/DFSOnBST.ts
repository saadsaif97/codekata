export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  // n.v == needle => return true
  if(head.value == needle) return true
  // !n => return false
  if(!head.value) return false
  // n.v <= needle return dfs(n.left, needle)
  if(head.value <= needle && head.right) return dfs(head.right, needle)
  // needle < n.v return dfs(n.right, needle)
  if(needle < head.value && head.left) return dfs(head.left, needle)
  
  return false
}
