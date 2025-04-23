/*You are given an integer n.

Each number from 1 to n is grouped according to the sum of its digits.

Return the number of groups that have the largest size.*/



/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const groupCounts = new Map();

    // Helper function to calculate sum of digits
    function digitSum(num) {
        return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }

    // Grouping numbers by their digit sum
    for (let i = 1; i <= n; i++) {
        const sum = digitSum(i);
        groupCounts.set(sum, (groupCounts.get(sum) || 0) + 1);
    }

    // Find the maximum group size
    let maxSize = 0;
    for (const size of groupCounts.values()) {
        maxSize = Math.max(maxSize, size);
    }

    // Count how many groups have the maximum size
    let count = 0;
    for (const size of groupCounts.values()) {
        if (size === maxSize) count++;
    }

    return count;


};