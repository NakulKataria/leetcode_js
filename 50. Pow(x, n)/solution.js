/*Implement pow(x, n), which calculates x raised to the power n (i.e., xn).*/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x===0 || x===1)return x;
    if(n===0) return 1;
//     let sol=1;
//    for (let i=1;i<=Math.abs(n);i++){
//        sol*=x;
//    }
//    if(n<0)return 1/sol;
//    else return sol;
let ans =temp(x,Math.abs(n));
return (n>=0)?ans:1/ans;

};
var temp = function(x,n){
   if(n===1)return x;
   let ans = temp(x,Math.floor(n/2));
   return (n%2===0)?ans*ans:ans*ans*x;
};