const caesar = function(str, n) {
    let newString = '', newIndex;
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 'a'.charCodeAt() && str.charCodeAt(i) <= 'z'.charCodeAt()) {
            newIndex = (str.charCodeAt(i) + n - 'a'.charCodeAt()) % 26;
            (newIndex < 0) ? newIndex += 26 + 'a'.charCodeAt() : newIndex += 'a'.charCodeAt();
            newString += String.fromCharCode(newIndex);
        }
        else if (str.charCodeAt(i) >= 'A'.charCodeAt() && str.charCodeAt(i) <= 'Z'.charCodeAt()) {
            newIndex = (str.charCodeAt(i) + n - 'A'.charCodeAt()) % 26;
            (newIndex < 0) ? newIndex += 26 + 'A'.charCodeAt() : newIndex += 'A'.charCodeAt();
            newString += String.fromCharCode(newIndex);
        }
        else {
            newString += str[i];
        }
    }
    return newString;
}

module.exports = caesar
