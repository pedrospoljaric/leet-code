/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const rotateRing = (depth) => {
        const edgeSize = matrix.length - 2 * depth
        const tl = matrix[depth][depth]
        const tr = matrix[depth][depth + edgeSize - 1]
        const br = matrix[depth + edgeSize - 1][depth + edgeSize - 1]
        const bl = matrix[depth + edgeSize - 1][depth]
        
        for (let i = 0; i < edgeSize - 2; i++) {
            // top
            matrix[depth][depth + edgeSize - 1 - i] = matrix[depth][depth + edgeSize - 1 - i - 1]
            // right
            matrix[depth + edgeSize - 1 - i][depth + edgeSize - 1] = matrix[depth + edgeSize - 1 - i - 1][depth + edgeSize - 1]
            // bottom
            matrix[depth + edgeSize - 1][i + depth] = matrix[depth + edgeSize - 1][i + depth + 1]
            // left
            matrix[i + depth][depth] = matrix[i + depth + 1][depth]
        }
        
            
        matrix[depth][depth + 1] = tl
        matrix[depth + 1][depth + edgeSize - 1] = tr
        matrix[depth + edgeSize - 1 - 1][depth] = bl
        matrix[depth + edgeSize - 1][depth + edgeSize - 1 - 1] = br
    }
    
    const rotateSub = (depth) => {
        if (matrix.length - 2 * depth <= 1) return
        for (let i = 0; i < matrix.length - depth * 2 - 1; i++) rotateRing(depth)
        rotateSub(depth + 1)
    }
    
    rotateSub(0)  
};