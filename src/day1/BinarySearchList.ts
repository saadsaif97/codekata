export default function bs_list(haystack: number[], needle: number): boolean {
  let i = 0
  
  let lo = 0
  let hi = haystack.length-1
  
  while(lo <= hi) {
    i+=1
    const mid = Math.floor((lo+hi)/2)
    const midValue = haystack[mid]
    
    console.log({needle, midValue, lo, mid, hi})
    
   if(midValue == needle) {
    console.log({size: haystack.length, i})
    return true
   }
   
   if (midValue < needle) {
    lo = mid + 1
   } else {
    hi = mid
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