// { Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let [N,K] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.maximizeMoney(N,K);
        console.log(res);
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
*/

class Solution {

    maximizeMoney(N,K){
        if(N===0) return 0
        return Math.round(N/2) * K
    }
}