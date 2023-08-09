class Node<T> {
    
    public next?: Node<T>
    
    constructor(public value: T) {
        this.value = value
        this.next = undefined
    }
}

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.length = 0
        this.head = undefined
    }

    push(item: T): void {
        const node = new Node(item)
        node.next = this.head
        this.head = node
        this.length++
    }
    
    pop(): T | undefined {
        const head = this.head
        this.head = head?.next
        
        this.length = Math.max(0, --this.length)
        
        return head?.value
    }
    
    peek(): T | undefined {
        return this.head?.value
    }
}

const list = new Stack<number>();
list.push(5);
list.push(7);
list.push(9);

console.log(list.pop()) // 9
console.log(list.pop()) // 7

console.log({
    length: list.length,
    list
}) // 1

console.log(list.pop()) // 5

console.log({
    length: list.length,
    list
}) // 0

console.log(list.pop()) // undefined

console.log(list.length)

list.push(69);
console.log(list.peek())

// expect(list.pop()).toEqual(9);
// expect(list.length).toEqual(2);


/**
 *                            |-----|   |-----|   |-----|   |-----| 
 *                            |  H  |   |     |   |     |   |  T  | 
 *                            |-----|   |-----|   |-----|   |-----|
 *                                 (____)    (____)    (____)    (____)
 */                           