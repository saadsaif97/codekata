export default function bubble_sort(arr: number[]): void {
  let completelySorted = false
  let iterations = 0
  do {
    iterations++
    let sortedSomeElement = false
    // for each iteration we have largest number at the end, so we exclude it from the iteration
    for (let i = 0; i < arr.length-1-iterations; i++) {
      if(arr[i] > arr[i+1]) {
       let temp = arr[i]
       arr[i] = arr[i+1]
       arr[i+1] = temp
       
       sortedSomeElement = true
      }
      
      if(!sortedSomeElement) completelySorted = true
    }
    
  } while (!completelySorted);
  
  console.log({iterations})
}

const arr = [9, 3, 7, 4, 69, 420, 42];
bubble_sort(arr)
console.log(arr)

// [3, 4, 7, 9, 42, 69, 420]