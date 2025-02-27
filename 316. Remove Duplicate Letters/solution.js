function removeDuplicateLetters(s) {
    let stack = [];
    let seen = new Set();
    let lastOccurrence = {};

   
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

       
        if (seen.has(char)) continue;

     
        while (stack.length > 0 && stack[stack.length - 1] > char && lastOccurrence[stack[stack.length - 1]] > i) {
            seen.delete(stack.pop());
        }

        stack.push(char);
        seen.add(char);
    }

    return stack.join('');
}