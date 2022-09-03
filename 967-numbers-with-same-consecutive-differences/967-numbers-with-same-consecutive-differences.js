/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    
    const result = []
    const a = (previousNumberStr) => {
        const lastDigit = Number(previousNumberStr[previousNumberStr.length - 1])
        if (lastDigit - k >= 0) {
            const newNumberStr = previousNumberStr + (lastDigit - k).toString()
            if (newNumberStr.length === n) result.push(newNumberStr)
            else a(newNumberStr)
        }
        if (lastDigit + k <= 9) {
            const newNumberStr = previousNumberStr + (lastDigit + k).toString()
            if (newNumberStr.length === n) result.push(newNumberStr)
            else a(newNumberStr)
        }
    }
    
    for (let i = 1; i <= 9; i++) {
        a(i.toString())
    }
    
    return Array.from(new Set(result)).map(Number)
};