const palindromes = function(string) {
    stringArr = string.toLowerCase().split('');
    stringArr = stringArr.filter(letter => letter.charCodeAt(0) >= 'a'.charCodeAt(0) && letter.charCodeAt(0) <= 'z'.charCodeAt());
    return (stringArr.join('') === stringArr.reverse().join(''));
}

module.exports = palindromes
