const tree: BinaryNode<number> = {
  value: 20,
  right: {
      value: 50,
      right: {
          value: 100,
          right: null,
          left: null,
      },
      left: {
          value: 30,
          right: {
              value: 45,
              right: null,
              left: null,
          },
          left: {
              value: 29,
              right: null,
              left: null,
          }
      },
  },
  left: {
      value: 10,
      right: {
          value: 15,
          right: null,
          left: null,
      },
      left: {
          value: 5,
          right: {
              value: 7,
              right: null,
              left: null,
          },
          left: null,
      }
  }
};

type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null | undefined)[] = [head]
  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | null | undefined;
    if(!curr) {
      continue;
    }
    
    if (curr.value == needle) {
      return true
    }
    
    console.log(curr.value)
    
    q.push(curr.left)
    q.push(curr.right)
  }
  
  return false
}

console.log(bfs(tree, 45))
