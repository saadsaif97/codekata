function qs(arr: number[], lo: number, hi: number): void {
  if(lo >= hi) return
  
  const pivotIdx = partition(arr, lo, hi)
  console.log({pivotIdx, lo, hi})
  
  qs(arr, lo, pivotIdx - 1)
  qs(arr, pivotIdx + 1, hi)
  
}


function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi]
  
  let idx = lo - 1
  
  for (let i = lo; i < hi; i++) {
    if(arr[i] <= pivot) {
      idx++
      
      let temp = arr[idx]
      arr[idx] = arr[i]
      arr[i] = temp
    }
  }
  
  idx++
  arr[hi] = arr[idx]
  arr[idx] = pivot
  
  return idx
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length-1)
}


const arr = [9, 3, 7, 4, 69, 420, 42];
quick_sort(arr)
console.log({arr})