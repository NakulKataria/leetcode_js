function searchRange(nums, target) {
    function binarySearch(left) {
        let low = 0, high = nums.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (nums[mid] > target || (left && nums[mid] === target)) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
    
    const start = binarySearch(true);
    if (start >= nums.length || nums[start] !== target) {
        return [-1, -1];
    }
    const end = binarySearch(false) - 1;
    return [start, end];
}
