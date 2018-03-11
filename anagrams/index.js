// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let cleanStringA = stringA.replace(/\W/g, '').toLowerCase();
    let cleanStringB = stringB.replace(/\W/g, '').toLowerCase();

    if (cleanStringA.length !== cleanStringB.length)
        return false;

    let firstResult = createMap(cleanStringA);
    let secondResult = createMap(cleanStringB);

    for (const char in firstResult) {
        if (secondResult[char] !== firstResult[char])
            return false;
    }

    return true;
}

function createMap(str) {
    let result = {};

    for (const char of str) {
        if (!result[char])
            result[char] = 0;
        
        result[char]++;
    }

    return result;
}

module.exports = anagrams;
