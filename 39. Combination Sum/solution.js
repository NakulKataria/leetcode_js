function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, combination, total) {
     
        if (total === target) {
            result.push([...combination]);
            return;
        }

        
        if (total > target) {
            return;
        }

      
        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(i, combination, total + candidates[i]); 
            combination.pop(); 
        }
    }

    backtrack(0, [], 0);
    return result;
}