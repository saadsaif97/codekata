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
        if (this.length == 0) {
            this.tail = this.head = node
            return
        }
        
        if(this.head) {
            this.head.next = node
            node.previous = this.head
            this.head = node
            return
        }
    }
    
    insertAt(item: T, idx: number): void {
        if (idx > this.length) throw new Error('eisa na karo')
        if (this.length == 0) return this.append(item)
        if (this.length == idx) return this.prepend(item)
        
        let curr = this.tail
        for (let i = 0; curr && i < this.length; i++) {
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
        if (this.length==1) { // we are incrementing before check
            this.head = this.tail = node
            return
        }
        
        if (this.tail) {
            node.next = this.tail
            this.tail.previous = node
            this.tail = node
            this.debug()
            return
        }
    }
    
    debug() {
        let curr = this.tail
        for (let i = 0; curr && i < this.length; i++) {
            console.log(`${i} => ${curr.value}`)
            curr = curr.next
        }
    }
    
    remove(item: T): T | undefined {
        if (this.length == 0) return undefined
        
        if(this.length==1) this.tail = this.head = undefined
        
        let curr = this.tail
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value == item) {
                this.length--
                
                if (curr.previous) curr.previous.next = curr.next
                if (curr.next) curr.next.previous = curr.previous
                
                
                return curr.value
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
        
        let curr = this.tail
        for (let i = 0; curr && i < this.length; i++) {
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
        
        let curr = this.tail
        for (let i = 0; curr && i < this.length; i++) {
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

console.log(list)