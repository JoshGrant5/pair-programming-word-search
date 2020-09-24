/* Pair Programmed by Josh Grant, Ayushi Sharma, & Nicholas Kostos */

const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return undefined
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = [];
    for (let i = 0; i < letters.length; i++) {
        let newWord = "";
        for (let j = 0; j < letters[i].length; j++) {
            newWord += letters[j][i];
        }
        verticalJoin.push(newWord);
    }
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch