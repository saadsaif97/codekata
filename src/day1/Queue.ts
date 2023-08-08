type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;
        
        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;   
        }
    }
    
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;

        // free
        head.next = undefined
        
        return head.value;
    }
    
    peek(): T | undefined {
        return this.head?.value;
    }
}

const list = new Queue<number>();

list.enqueue(5);
list.enqueue(7);
list.enqueue(9);


console.log(list.deque()) // 5

console.log(list)

console.log(list.length) // 2

list.enqueue(11);

console.log(list)

console.log(list.deque()) // 7
console.log(list.deque()) // 9
