// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(' ');
    let words = '';
    
    for (let item of arr) {
        words += item.charAt(0).toUpperCase() + item.substring(1) + ' ';
    }

    return words.trim();
}

console.log(capitalize('a short sentence'));

module.exports = capitalize;
