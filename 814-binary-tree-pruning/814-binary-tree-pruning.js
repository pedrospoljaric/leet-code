/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    const traverseTree = (node) => {
        if (!node) return false
        if (!node.left && !node.right) return !!node.val
        
        const leftHasOne = traverseTree(node.left)
        const rightHasOne = traverseTree(node.right)
        
        if (!leftHasOne) node.left = null
        if (!rightHasOne) node.right = null

        return leftHasOne || rightHasOne || node.val
    }
    
    const rootHasOne = traverseTree(root)
    
    if (!rootHasOne) return null
    
    return root
};