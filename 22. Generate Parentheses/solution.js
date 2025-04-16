/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.*/
 /**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result=[];
    function backtrack(currentstring='',open=0,close=0){
        //base case
        if(currentstring.length===n*2){
            result.push(currentstring);
            return;
        } 
        //add (
        if(open<n){
            backtrack(currentstring+'(',open+1,close);
        }
        // add)
          if(close <open){
            backtrack(currentstring+')',open,close+1);
        }


    }

    backtrack();
    return result;
    
};