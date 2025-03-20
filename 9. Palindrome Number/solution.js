/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
    // if (num<0)return false;
    let reversed=0;
    const orignal=num;
     while (num > 0) {
        
        reversed = reversed * 10 + num % 10; // Append to reversed number
        num = Math.floor(num / 10); // Remove last digit
    }

    return orignal===reversed;
    
};