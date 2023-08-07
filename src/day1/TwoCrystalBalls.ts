export default function two_crystal_balls(breaks: boolean[]): number {
  // Determine the optimal jump size based on the length of breakPoints array.
  let optimalJump = Math.floor(Math.sqrt(breaks.length));
    
  // Iterate through breaks with a step of optimalJump.
  let i = optimalJump
  for (i; i < breaks.length; i += optimalJump) {
    console.log('Current i: ', i, breaks[i]);

    if(breaks[i]) {
      /**
       * exclude previous value and include next value
       * 4,8,12 found at 12
       * we will increase 12 to 13
       * 13-4 = 9
       * 9,10,11,12
       */
      i++
      break;
    }
  }
  
  i-=optimalJump
  // Iterate backward from current index to find the exact break point.
  for (let j = 0; j < optimalJump; j++, i++) {
    console.log({i,j, breaks:breaks[i]})
    if(breaks[i]) {
      console.log('Backward Index: ', i, breaks[i]);
      return i;
    }
  }
  
  // not found
  return -1
}


let idx = Math.floor(Math.random() * 20);
idx = 12
const data = new Array(20).fill(false);
for (let i = idx; i < 20; ++i) {
  data[i] = true;
}
console.log({data, idx}, two_crystal_balls(data))