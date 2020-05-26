const reverseString = function(string) {
    const sLen = string.length;
    let reversedString = "";
    for (let i = sLen - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

module.exports = reverseString
