/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign=(x<0)?-1:1;
    if (x<0)x=-x;
    let ans=0;
    while(x!=0){
      ans=(ans*10)+x%10;
      x=Math.floor(x/10);
      
    }
    if (sign*ans<(2**31)-1 && sign*ans>-(2**31)) return sign*ans;
    return 0;
    
};