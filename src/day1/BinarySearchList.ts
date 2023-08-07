export default function bs_list(haystack: number[], needle: number): boolean {
  
  let left = 0
  let right = haystack.length-1
  let mid = Math.floor((left+right)/2)
  
  while (left <= right) {
    mid = Math.floor((left+right)/2)
    
    console.log({left, right, mid})
    
   if(haystack[mid] == needle) {
    console.log('here:', {mid, item: haystack[mid]})
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
bs_list([1,2,4], 4)
bs_list([1,2,4,5,6,8,10], 10)
bs_list([1,2,4,5,6,8,10,12,14,15,16,20,25], 25)
bs_list([1,2,4,5,6,8,10,12,14,15,16,20,25,26,27,28,29,30,31,32,33,34,35,36,37,38, 39,40,41,42,43], 43)

/**
 * 1-1
 * 3-2
 * 7-3
 * 13-4
 * 31-5
 */