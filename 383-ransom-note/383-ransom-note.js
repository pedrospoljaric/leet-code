/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineLetters = {}
    magazine.split('').forEach((letter) => {
        magazineLetters[letter] = magazineLetters[letter] || 0
        magazineLetters[letter]++
    })
    
    const ransomNoteLetters = {}
    ransomNote.split('').forEach((letter) => {
        ransomNoteLetters[letter] = ransomNoteLetters[letter] || 0
        ransomNoteLetters[letter]++
    })
    
    for (const item of Object.entries(ransomNoteLetters)) {
        if (item[1] > (magazineLetters[item[0]] || 0)) return false
    }
    return true
};