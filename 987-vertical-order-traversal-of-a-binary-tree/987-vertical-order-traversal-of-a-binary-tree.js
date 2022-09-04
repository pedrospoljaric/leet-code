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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const map = {}
    
    const traverseTree = (node, row, column) => {
        if (!node) return
        map[column] = map[column] || {}
        map[column][row] = map[column][row] || []
        map[column][row].push(node.val)
        traverseTree(node.left, row + 1, column - 1)
        traverseTree(node.right, row + 1, column + 1)
    }
    
    traverseTree(root, 0, 0)
    
    const verticalOrderTraversal = []
    Object.keys(map).map(Number).sort((a, b) => a < b ? -1 : 1).forEach((column) => {
        const columnResult = []
        Object.keys(map[column]).forEach((row) => {
            map[column][row].sort((a, b) => a < b ? -1 : 1)
            columnResult.push(...map[column][row])
        })
        verticalOrderTraversal.push(columnResult)
    })
    
    return verticalOrderTraversal
};