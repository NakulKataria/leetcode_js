var maxNumber = function(nums1, nums2, k) {
    function maxSubsequence(nums, size) {
        let stack = [];
        let drop = nums.length - size; 
        
        for (let num of nums) {
            while (stack.length && drop > 0 && stack[stack.length - 1] < num) {
                stack.pop();
                drop--;
            }
            stack.push(num);
        }
        
        return stack.slice(0, size);
    }

    function merge(seq1, seq2) {
        let merged = [];
        while (seq1.length || seq2.length) {
            if (seq1 > seq2) {
                merged.push(seq1.shift());
            } else {
                merged.push(seq2.shift());
            }
        }
        return merged;
    }

    let best = [];
    
    for (let i = Math.max(0, k - nums2.length); i <= Math.min(k, nums1.length); i++) {
        let subseq1 = maxSubsequence(nums1, i);
        let subseq2 = maxSubsequence(nums2, k - i);
        let candidate = merge([...subseq1], [...subseq2]); 
        if (candidate > best) best = candidate;
    }

    return best;
};
