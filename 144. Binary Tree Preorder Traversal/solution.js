function preorderTraversal(root) {
    if (!root) return [];
    
    let stack = [root], result = [];

    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);
        
        if (node.right) stack.push(node.right); 
        if (node.left) stack.push(node.left);   
    }
    
    return result;
}
