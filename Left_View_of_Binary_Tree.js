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

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str){
   // Corner Case
   if(str.length === 0 || str[0] === "N")
       return null;

   // Create the root of the tree
   let root = new Node(parseInt(str[0]));

   // Push the root to the queue
   let queue = [];
   let start = 0;
   queue.push(root);

   // Starting from the second element
   let i = 1;
   while(queue.length !== start && i < str.length) {

       // Get and remove the front of the queue
       let currNode = queue[start];
       start++;

       // Get the current node's value from the string
       let currVal = str[i];

       // If the left child is not null
       if(currVal !== "N") {

           // Create the left child for the current node
           currNode.left = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.left);
       }

       // For the right child
       i++;
       if(i >= str.length)
           break;
       currVal = str[i];

       // If the right child is not null
       if(currVal !== "N") {

           // Create the right child for the current node
           currNode.right = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.right);
       }
       i++;
   }

   return root;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let res = obj.leftView(root);
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] +" ";
        }
        console.log(s);
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @returns {number[]}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    leftView(root)
    {
        /** /
        if(root instanceof Node && !isNaN(root.data) ){
            const levels = []
            let nextLevelIdx = 0
            
            while(nextLevelIdx !== null) {
                let level = nextLevelIdx ? 
                    this.getNextLevel( levels[nextLevelIdx-1] ) :
                    [root]
                
                if(level.length > 0){
                    nextLevelIdx = levels.push( level )
                } else {
                    nextLevelIdx = null
                }
            }
            
            return levels.map(level=>level[0].data)
        }
        
        return ''
        /*/
        if( !(root instanceof Node) ) return;

        const levels = [[root]]
        let nextLevelIdx = 1
        
        while(nextLevelIdx !== null) {
            let level = this.getNextLevel( levels[nextLevelIdx-1] )
            
            if(level.length > 0){
                nextLevelIdx = levels.push( level )
            } else {
                nextLevelIdx = null
            }
        }
        
        return levels.map(level=>level[0].data)
        
        //*/
    }
    
    getNextLevel(upper){
        const level = []
        
        for(let node of upper){
            if(node.left instanceof Node){
                level.push( node.left )
            }
            if(node.right instanceof Node){
                level.push( node.right )
            }
        }
        
        return level
    }
}