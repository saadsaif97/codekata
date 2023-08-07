export default function two_crystal_balls(breaks: boolean[]): number {
  let jump = Math.floor(Math.sqrt(breaks.length))
  
  for (let i = jump-1; i < breaks.length; i=i+jump) {
    console.log('i: ',i, breaks[i])
    if(breaks[i] == true) {
      for (let j = i-jump; j < i; j++) {
        if(breaks[j]) {
          console.log('j: ',j, breaks[j])
          return i
        }
      }
    }
  }
  
  return -1
}


let idx = Math.floor(Math.random() * 16);
const data = new Array(16).fill(false);
for (let i = idx; i < 16; ++i) {
  data[i] = true;
}
console.log({data, idx})
two_crystal_balls(data)