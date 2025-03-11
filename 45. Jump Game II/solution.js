var jump = function(nums) {
    let n = nums.length;
    let jumps = 0, currentEnd = 0, farthest = 0;
    
    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        // If we reach the end of the current jump range
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;

            // If we reached the last index, break early
            if (currentEnd >= n - 1) break;
        }
    }

    return jumps;
};
