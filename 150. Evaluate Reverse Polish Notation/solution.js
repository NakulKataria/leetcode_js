function evalRPN(tokens) {
    let stack = [];

    for (let token of tokens) {
        if (["+", "-", "*", "/"].includes(token)) {
            let b = stack.pop();
            let a = stack.pop();
            switch (token) {
                case "+": stack.push(a + b); break;
                case "-": stack.push(a - b); break;
                case "*": stack.push(a * b); break;
                case "/": stack.push(Math.trunc(a / b)); break; 
            }
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
}
