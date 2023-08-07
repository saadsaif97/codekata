export default function two_crystal_balls(breaks: boolean[]): number {
  // Determine the optimal jump size based on the length of breakPoints array.
  let optimalJump = Math.floor(Math.sqrt(breaks.length));

  let breakPointFoundAt = -1
  
  // Iterate through breaks with a step of optimalJump.
  for (let index = optimalJump - 1; index < breaks.length; index += optimalJump) {
    console.log('Current Index: ', index, breaks[index]);

    if(breaks[index] == true) {
      breakPointFoundAt = index
      break;
    }
  }
  
  // not found
  if (breakPointFoundAt == -1) return -1
  
  // Iterate backward from current index to find the exact break point.
  for (let backIndex = breakPointFoundAt - optimalJump; backIndex < breakPointFoundAt; backIndex++) {
    if(breaks[backIndex]) {
      console.log('Backward Index: ', backIndex, breaks[backIndex]);
      return backIndex;
    }
  }
  
  // not found
  return -1
}


let idx = Math.floor(Math.random() * 20);
const data = new Array(20).fill(false);
for (let i = idx; i < 20; ++i) {
  data[i] = true;
}
console.log({data, idx}, two_crystal_balls(data))