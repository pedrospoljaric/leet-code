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
    const countGoodNodes = (node, greatest) => {
        if (!node) return
        if (node.val >= greatest) total++
        countGoodNodes(node.left, Math.max(node.val, greatest))
        countGoodNodes(node.right, Math.max(node.val, greatest))
    }
    
    countGoodNodes(root, -100001)
    
    return total
};
