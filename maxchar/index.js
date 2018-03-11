// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let result = {};

    for (const char of str) {
        if (!result[char])
            result[char] = 0;
        
        result[char]++;
    }

    return Object.keys(result).sort((a, b) => result[b] - result[a])[0];
}

console.log(maxChar("abcccccccd"));

module.exports = maxChar;
