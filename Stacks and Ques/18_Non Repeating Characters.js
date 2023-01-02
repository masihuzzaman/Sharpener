module.exports = { 
    //param A : string
    //return a strings
       solve : function(A){
           const hash = {};
           let pointer = 0;
           let result = '';
           
           for(let i = 0; i < A.length; i++) {
               const curr = A.charAt(i);
               
               if (hash[curr] === undefined) {
                   hash[curr] = 1;
               } else {
                   hash[curr]++;
               }
               
               let fnr = A.charAt(pointer);
               while(hash[fnr] > 1) {
                   pointer++;
                   fnr = A.charAt(pointer);
               }
               if (hash[fnr] === 1) {
                   result += fnr;                
               } else {
                   result += "#";
               }
   
           }
           
           return result;
   
       }
   };
   
   