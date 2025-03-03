class NestedInteger {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.list = null;
        } else {
            this.value = null;
            this.list = [];
        }
    }

    isInteger() {
        return this.value !== null;
    }

    getInteger() {
        return this.value;
    }

    getList() {
        return this.list;
    }

    add(elem) {
        if (this.list !== null) {
            this.list.push(elem);
        }
    }
}

function deserialize(s) {
    if (!s.startsWith('[')) {
        return new NestedInteger(parseInt(s)); 
    }

    let stack = [];
    let num = "";
    let current = null;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === '[') {
            let ni = new NestedInteger();
            if (stack.length > 0) {
                stack[stack.length - 1].add(ni);
            }
            stack.push(ni);
        } else if (char === ']' || char === ',') {
            if (num.length > 0) {
                stack[stack.length - 1].add(new NestedInteger(parseInt(num)));
                num = "";
            }
            if (char === ']') {
                current = stack.pop();
            }
        } else {
            num += char; 
        }
    }

    return current;
}