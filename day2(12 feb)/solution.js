// solution 1
function twoSum(nums, target) {
    let numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }
    
    return []; // code will never reach here according to problem statement
}


function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate the current container area
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentWater = width * currentHeight;

        // Update maxWater if current area is bigger
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer pointing to the shorter line inside
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}



function threeSum(nums) {
    nums.sort((a, b) => a - b); 
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
       
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++; 
            } else {
                right--;
            }
        }
    }

    return result;
}