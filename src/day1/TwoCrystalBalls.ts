export default function two_crystal_balls(breaks: boolean[]): number {
  // Determine the optimal jump size based on the length of breakPoints array.
  let optimalJump = Math.floor(Math.sqrt(breaks.length));

  // Iterate through breaks with a step of optimalJump.
  for (let index = optimalJump - 1; index < breaks.length; index += optimalJump) {
    console.log('Current Index: ', index, breaks[index]);

    if(breaks[index] == true) {
      // Iterate backward from current index to find the exact break point.
      for (let backIndex = index - optimalJump; backIndex < index; backIndex++) {
        if(breaks[backIndex]) {
          console.log('Backward Index: ', backIndex, breaks[backIndex]);
          return backIndex;
        }
      }
    }
  }

  // Return -1 if no break point is found.  
  return -1;
}


let idx = Math.floor(Math.random() * 10000);
const data = new Array(10000).fill(false);
for (let i = idx; i < 10000; ++i) {
  data[i] = true;
}
console.log({data, idx})
two_crystal_balls(data)