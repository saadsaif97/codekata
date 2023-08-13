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

function walk(head: BinaryNode<number> | null, path: number[]): number[] {
  if(!head) return path
  
  // pre
  path.push(head.value)
  console.log({head})
  // recurse
  walk(head.left, path)
  walk(head.right, path)
  // post
  return path
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, [])
}
console.log(pre_order_search(tree)) // [ 20, 10, 5, 7, 15, 50, 30, 29, 45, 100, ]
