/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const rows = {}

    const traverseTree = (node, level) => {
        if (!node) return
        rows[level] = rows[level] || []
        rows[level].push(node.val)
        ;(node.children || []).forEach((child) => {
            traverseTree(child, level + 1)
        })
    }
    traverseTree(root, 0)

    return Object.values(rows)
};