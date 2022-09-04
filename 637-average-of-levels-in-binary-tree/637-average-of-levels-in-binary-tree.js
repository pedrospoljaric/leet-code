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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const rows = {}
    const traverseTree = (node, row) => {
        if (!node) return
        rows[row] = rows[row] || { total: 0, count: 0 }
        rows[row].total += node.val
        rows[row].count++
        traverseTree(node.left, row + 1)
        traverseTree(node.right, row + 1)
    }
    
    traverseTree(root, 0)
    
    return Object.values(rows).map(({total, count}) => total/count)
};