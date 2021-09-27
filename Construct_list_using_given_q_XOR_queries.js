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


function main() {
  let t = parseInt(readLine());
  let i = 0;
 
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let Q = [];
    for(let j=0;j<N;j++){
      let temp = readLine().trim().split(" ").map((x) => parseInt(x));
      Q.push(temp);
    }
    let obj = new Solution();
    let res = obj.constructList(Q,N);
    let s = "";
    for(let j = 0;j<res.length;j++){
      s = s+res[j] + " ";
    }
    console.log(s);
  }

}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} Q
 * @param {number} N
 * @return {number[]}
*/

class Solution {
  constructList(Q,N){
    const S = [0]
    const cumulativeXOR = []
    
    for(let i=0; i<Q.length; i++){
        const query = Q[i]
        
        if( query[0] === 0 ){
            S.push( query[1].valueOf() )
        }
        else if( query[0] === 1 ){
            for(let j=0; j<cumulativeXOR.length; j++){
                cumulativeXOR[j][1] = cumulativeXOR[j][1] ^ query[1]
            }
            if(i===0 || Q[i-1][0]===0){
                cumulativeXOR.push( [S.length-1,query[1]] )
            }
        }
        else {
            console.log(`found unknown operator: ${query[0]}`)
        }
    }
    
    if(cumulativeXOR.length > 0){
        let xorIndex = 0
        let xor = cumulativeXOR[ xorIndex ]
        
        for(let i=0; i<S.length; i++){
            if(i>xor[0]){
                xorIndex++
                xor = cumulativeXOR[ xorIndex ] || [S.length, 0]
            }
            
            S[i] = S[i] ^ xor[1]
        }
    }
    
    return S.sort( (a,b)=>parseInt(a)-parseInt(b) )
  }
}