export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0
        this.data = []
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.heapifyUp(this.length)
        this.length++
    }
    
    delete(): number {
        if (this.length == 0) return -1
        const out = this.data[0]
        
        if (this.length == 1) {
            this.data = []
            this.length-- 
            return out
        }
        
        const lastElement = this.data[this.length-1]
        this.data[0] = lastElement
        
        this.length-- // we use it first because following function uses the length property
        this.heapifyDown(0)
        return out
    }
    
    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx)
        const rIdx = this.rightChild(idx)
        
        if (idx >= this.length || lIdx >= this.length) return // no child
        
        const v = this.data[idx]
        const lV = this.data[lIdx]
        const rV = this.data[rIdx]
        
        if (rV && rV < lV && rV < v) { // swipe to smaller value
            this.data[rIdx] = v
            this.data[idx] = rV
            this.heapifyDown(rV)
        } else if (lV < rV && lV < v) { // swipe to smaller value
            this.data[lIdx] = v
            this.data[idx] = lV
            this.heapifyDown(lIdx)
        }
    }
    
    private heapifyUp(idx: number): void {
        if (idx === 0) return
        
        const p = this.parent(idx)
        const parentV = this.data[p]
        const v = this.data[idx]
        
        if (parentV > v) {
            this.data[p] = v
            this.data[idx] = parentV
            this.heapifyUp(p)
        }
    }
    
    private leftChild(i: number): number {
        return (2*i + 1)
    }
    
    private rightChild(i: number): number {
        return (2*i + 2);
    }
    
    private parent(i: number): number {
        return Math.floor((i - 1)/2);
    }
}
