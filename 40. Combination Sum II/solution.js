function combinationSum2(candidates, target) {
    const results = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start, target, combination) {
        if (target === 0) {
            results.push([...combination]); 
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] > target) {
                break; 
            }

            combination.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], combination); 
            combination.pop(); 
        }
    }

    backtrack(0, target, []);
    return results;
}