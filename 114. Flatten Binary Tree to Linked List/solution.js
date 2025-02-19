class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  const flatten = (root) => {
    if (!root) return;
  
    
    const flattenTree = (node) => {
      if (!node) return null;
  
      const leftSubtree = node.left;
      const rightSubtree = node.right;
  
      
      node.left = null;
      if (leftSubtree) {
        node.right = leftSubtree;
        let rightmost = leftSubtree;
        while (rightmost.right) {
          rightmost = rightmost.right;
        }
        
        rightmost.right = rightSubtree;
      }
  
      
      flattenTree(node.right);
    };
  
    flattenTree(root);
  };
  