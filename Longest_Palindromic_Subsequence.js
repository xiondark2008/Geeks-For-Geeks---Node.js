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
    let S = readLine().trim();
    let obj = new Solution();
    let res = obj.longestPalinSubseq(S);
    console.log(res);
  }

}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @return {number} 
*/

class Solution {
    longestPalinSubseq(S){
        if(!S || !S.length) return 0;
        if( this.isPalindrome(S) ) return S.length;
        const reverse = Object.assign([], S).reverse()
        const LCS = this.longestCommonSubsequence(S, reverse)
        
        return LCS.length
    }
    
    isPalindrome(S){
        const size = S.length
        
        for(let i=0; i<=(size/2); i++){
            if(S[i] !== S[size-i-1]) return false
        }
        
        return true
    }
    
    
    buildTable(x,y){
        return Array(x).fill(0).map( row=>new Array(y) )
    }
    
    longestCommonSubsequence(X, Y){
        const m = X.length+1
        const n = Y.length+1
        const C = this.buildTable(m, n)
        const B = this.buildTable(m, n)
        
        C[0][0] = 0
        B[0][0] = 0
        for(let i=1; i<m; i++){
            C[i][0] = 0
        }
        for(let j=1; j<n; j++){
            C[0][j] = 0
        }
        for(let i=1; i<m; i++){
            for(let j=1; j<n; j++){
                const Xi = X[i-1]
                const Yj = Y[j-1]
                
                if( Xi === Yj ){
                    C[i][j] = C[i-1][j-1] + 1
                    B[i][j] = '\u2196' //Up&Left
                }
                else {
                    const up = C[i][j-1]+0
                    const left =  C[i-1][j]+0
                    if( up >= left ){
                        C[i][j] = up
                        B[i][j] = '\u2191' //Up
                    }
                    else {
                        C[i][j] = left
                        B[i][j] = '\u2190' //Left
                    }
                }
                //console.log( 'X['+i+']: '+Xi+'\nY['+j+']: '+Yj+'\nC['+i+']['+j+']: '+(C[i][j]+0) )
            }
        }
        
        //For logging
        // for(let i=1; i<m; i++){
        //     C[i][0] = X[i-1]
        //     B[i][0] = X[i-1]
        // }
        // for(let j=1; j<n; j++){
        //     C[0][j] = Y[j-1]
        //     B[0][j] = Y[j-1]
        // }
        const self = this
        return {
            get value(){
                return self.printLongestCommonSubsequence(B, X)
            },
            length: C[C.length-1][C[0].length-1]+0,
            C: C,
            B: B
        }
    }
    printLongestCommonSubsequence(B,X,i=B.length-1,j=B[0].length-1){
        let output = ''
        
        while(i!==0 && j!==0){
            if( B[i][j]==='\u2196' ){    //Up&Left
                output = X[i-1] + output
                i--
                j--
            }
            else if( B[i][j] === '\u2191' ){ //Up
                j--
            }
            else { //Left
                i--
            }
        }
    
        return output
    }
    
    
    //Extra
    longestString(list){
        return list.reduce( (longest, it)=>{
            const length = it ? it.toString().length : 0
            if( length > longest ){
                return length
            }
            return longest
        } )
    }
    xyFlip(table){
        const flipped = this.buildTable(table[0].length, table.length)
        for(let x=0; x<table.length; x++){
            const col = table[x]
            for(let y=0; y<table[x].length; y++){
                const cell = col[y]
                flipped[y][x] = cell
            }
        }
        return flipped
    }
    printTable(table){
        const largest = this.longestString( table.flat() )
        const format = val => (val||val===0?val.toString():'').padStart(largest)
        let output = ''
        
        table = this.xyFlip(table)
        for(let row of table){
            output += row.map( format ).join()+'\n'
        }
        
        console.log(output)
    }
    
}