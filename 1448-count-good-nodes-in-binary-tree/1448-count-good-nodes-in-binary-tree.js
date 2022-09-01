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
 * @return {number}
 */
var goodNodes = function(root) {
    
    let total = 0
    const a = (node, greatest) => {
        if (!node) return
        if (node.val >= greatest) total++
        a(node.left, Math.max(node.val, greatest))
        a(node.right, Math.max(node.val, greatest))
    }
    
    a(root, -100001)
    
    return total
};