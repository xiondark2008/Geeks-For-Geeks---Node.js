// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine()); 
    let arr = new Array(n);
    let inputArr2 = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j < n;j++){
      arr[j] = inputArr2[j];
    }
    let obj = new Solution();
    let res = obj.minJumps(arr,n);
    console.log(res);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    minJumps(arr,N=arr.length){
        if(N<=1) return 0
        if(arr[0] === 0) return -1
        let previous = 0
        let current = 0
        let jumps = 0
    
        for(let i=0; i<N; i++){
            // console.log('arr['+i+']:\t\t',arr[i])
            if(i===current && arr[i]===0) return -1
            if(i > previous){
                previous = current
                jumps++
            }
            current = Math.max( current, i+arr[i] )
            // console.log('previous:\t',previous,
            //             '\ncurrent:\t',current,
            //             '\njumps:\t\t',jumps)
        }
    
        return jumps
    }
}