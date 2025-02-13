// question 1
function threeSumClosest(nums, target) {
    
    nums.sort((a, b) => a - b);

    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }

            
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                
                return currentSum;
            }
        }
    }

    return closestSum;
}

// solution2

function fourSum(nums, target) {
  
    nums.sort((a, b) => a - b);

    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
      
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                   
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

   return result;
}