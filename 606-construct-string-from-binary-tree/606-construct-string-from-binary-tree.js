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
 * @return {string}
 */
var tree2str = function(root) {
    
    const getTreeString = (node) => {
        if (!node) return ''
        return `${node.val}(${getTreeString(node.left)})(${getTreeString(node.right)})`
    }
    
    return getTreeString(root).replace(/\(\)\(\)/g, '').replace(/\)\(\)/g, ')')
};