function maxSubarraySumCircular(nums) {
    let totalSum = 0;
    let maxSum = -Infinity, minSum = Infinity;
    let curMax = 0, curMin = 0;

    for (let num of nums) {
        totalSum += num; 

        curMax = Math.max(curMax + num, num); 
        maxSum = Math.max(maxSum, curMax);

        curMin = Math.min(curMin + num, num);
        minSum = Math.min(minSum, curMin);
    }

    return maxSum < 0 ? maxSum : Math.max(maxSum, totalSum - minSum);
}