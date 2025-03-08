var longestSubarray = function(nums, limit) {
    let left = 0, maxLen = 0;
    let maxDeque = [], minDeque = [];

    for (let right = 0; right < nums.length; right++) {
        
        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] < nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

       
        while (minDeque.length && nums[minDeque[minDeque.length - 1]] > nums[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        
        while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
            left++;
            if (maxDeque[0] < left) maxDeque.shift();
            if (minDeque[0] < left) minDeque.shift();
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};