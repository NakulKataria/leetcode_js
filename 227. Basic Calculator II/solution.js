function calculate(s) {
    let stack = [];
    let num = 0;
    let sign = '+';
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let char = s[i];

        if (!isNaN(char) && char !== ' ') {
            num = num * 10 + (char - '0');
        }

        if (isNaN(char) || i === n - 1) {
            if (char === ' ' && i !== n - 1) continue;

            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                stack.push(stack.pop() * num);
            } else if (sign === '/') {
                stack.push(Math.trunc(stack.pop() / num));
            }

            sign = char;
            num = 0;
        }
    }

    return stack.reduce((acc, curr) => acc + curr, 0);
}