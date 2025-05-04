/*You are given a positive integer n.

Return the maximum product of any two digits in n.

Note: You may use the same digit twice if it appears more than once in n.*/
/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
 
    const digits = String(n).split('').map(Number);

    let first = 0, second = 0;
    for (const d of digits) {
        if (d > first) {
            second = first;
            first = d;
        } else if (d > second) {
            second = d;
        }
    }

    return first * second;


};