class BSTIterator {
    constructor(root) {
        this.stack = [];
        this._pushLeft(root); 
    }

    _pushLeft(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next() {
        let node = this.stack.pop(); 
        if (node.right) {
            this._pushLeft(node.right); 
        }
        return node.val;
    }

    hasNext() {
        return this.stack.length > 0;
    }
}