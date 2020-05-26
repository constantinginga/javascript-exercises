const repeatString = function(string, n) {
    let newString = "";
    if (n >= 0) {
        for (let i = 0; i < n; i++) {
            newString += string;
        }
    }
    else {
        newString = "ERROR";
    }

    return newString;
}

module.exports = repeatString
