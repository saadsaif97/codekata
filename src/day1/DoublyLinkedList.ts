type Node<T> = {
    value: T,
    next?: Node<T>,
    previous?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
        this.tail = undefined
    }

    prepend(item: T): void {
        let node: Node<T> = { value: item }
        this.length++
        if (!this.head) {
            this.tail = this.head = node
            return
        }
        
        node.next = this.head
        this.head.previous = node
        this.head = node
        return
    }
    
    insertAt(item: T, idx: number): void {
        if (idx > this.length) throw new Error('eisa na karo')
        if (this.length == 0) return this.append(item)
        if (this.length == idx) return this.prepend(item)
        
        let curr = this.head
        for (let i = 0; curr && i <= idx; i++) {
            if (curr.value == item) {
                this.length++
                
                let node: Node<T> = { value: item }
                
                node.next = this.head?.next
                this.head!.next!.previous = node
                
                this.head!.next = node
                node.previous = this.head
                this.head = node
                
                return
            }
            curr = curr.next
        }
    }
    
    append(item: T): void {
        let node: Node<T> = {value: item}
        this.length++
        if (!this.tail) {
            this.head = this.tail = node
            return
        }
        
        node.previous = this.tail
        this.tail.next = node
        this.tail = node
    }
    
    debug() {
        console.log('length: ', this.length)
        let curr = this.head
        for (let i = 0; curr && i < this.length; i++) {
            console.log(`${i} => ${curr.value}`)
            curr = curr.next
        }
    }
    
    remove(item: T): T | undefined {
        let curr = this.head
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value == item) {
                return this.removeAt(i)
            }
            curr = curr.next
        }
        
        return undefined
    }
    
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value
    }
    
    removeAt(idx: number): T | undefined {
        if (idx > this.length) throw new Error('eisa na karo')
        
        if (this.length == 0) return undefined
        
        if (idx == 0) {
            this.length--
            
            let head = this.head
            
            this.head = head?.next
            if (this.head) this.head.previous = undefined
            return head?.value
        }
        
        let curr = this.head
        for (let i = 0; curr && i <= idx; i++) {
            if (i == idx) {
                this.length--
                
                if (curr.previous) curr.previous.next = curr.next
                if (curr.next) curr.next.previous = curr.previous
                
                return curr.value
            }
            curr = curr.next
        }
        
        return undefined
    }
    
    private getAt(idx: number): Node<T> | undefined {
        if (idx > this.length) throw new Error('eisa na karo')
        
        if (this.length == 0) return undefined
        
        let curr = this.head
        for (let i = 0; curr && i <= idx; i++) {
            if (i == idx) {
                return curr
            }
            curr = curr.next
        }
        
        return undefined
    }
}

let list = new DoublyLinkedList<number>()
list.append(5);
list.append(7);
list.append(9);

list.get(2) // 9
list.removeAt(1) // 7
console.log(list.length) // 2

list.append(11);
list.removeAt(1) // 9
list.remove(9) // undefined
list.removeAt(0) // 5
list.removeAt(0) // 11


list.prepend(5);
list.prepend(7);
list.prepend(9);

list.debug()
list.remove(9)
list.debug()