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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let obj = new Solution();
        let res = obj.mthHalf(n, m);
        console.log(res);
        
    }
}// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution{
    mthHalf(n, m){
        while(m-- > 1){
            n = Math.floor(n / 2)
            if(n===0) break;
        }
        
        return n
    }
}