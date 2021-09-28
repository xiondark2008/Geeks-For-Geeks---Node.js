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
    for(let i=0;i<t;i++)
    {
       	let n = parseInt(readLine());
       	let nums = new Array(n);
       	let input1 = readLine().split(" ").map((x)=>parseInt(x));
       	for(let j=0;j<n;j++) nums[j] = input1[j];
       	let obj = new Solution();
        let res = obj.sortedArrayToBST(nums);
        let s = "";
        for(let j = 0;j<res.length;j++){
        	s+=res[j]+" ";
        }
        console.log(s);
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} nums
 * @return {number[]} 
*/
class Solution {
  	sortedArrayToBST(nums){
  	    if(nums.length < 3) return nums
  	    const middleIndex = Math.floor( (nums.length-1)/2 )
  	    const rtn = [nums[middleIndex].valueOf()]
  	    let left = nums.slice(0, middleIndex)
  	    let right = nums.slice(middleIndex+1)
  	    
  	    this.append(rtn, this.sortedArrayToBST(left))
  	    this.append(rtn, this.sortedArrayToBST(right))
  	    
  	    return rtn
  	}
  	
  	append(a, b){
  	    const spliceA = Array.prototype.splice.bind(a)
  	    const args = [a.length, 0]
  	    
  	    spliceA.apply(a, args.concat(b) )
  	    
  	    return a.length
  	}
}