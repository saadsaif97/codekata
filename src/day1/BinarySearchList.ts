export default function bs_list(haystack: number[], needle: number): boolean {
  let i = 0
  
  let left = 0
  let right = haystack.length-1
  let mid = Math.floor((left+right)/2)
  
  while (left <= right) {
    i+=1
    mid = Math.floor((left+right)/2)
    
   if(haystack[mid] == needle) {
    console.log({size: haystack.length, i})
    return true
   }
   
   if (haystack[mid] < needle) {
    left = mid + 1
   } else {
    right = mid - 1
   }
  }
  
  return false
}

bs_list([1], 1)
bs_list([0, 1, 2], 2)
bs_list([0, 1, 2, 3, 4, 5, 6], 6)
bs_list([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 14)
bs_list([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 30)

/**
 * 1-1
 * 3-2
 * 7-3
 * 13-4
 * 31-5
 */