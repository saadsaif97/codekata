export default function bs_list(haystack: number[], needle: number): boolean {
  let i = 0
  
  let lo = 0
  let hi = haystack.length-1
  
  do {
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
    hi = mid - 1
   }
  } while (lo <= hi)
  
  return false
}

const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420]

bs_list(foo, 69)
bs_list(foo, 1336)
bs_list(foo, 69420)
bs_list(foo, 69421)
bs_list(foo, 1)
bs_list(foo, 0)