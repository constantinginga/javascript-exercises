const sumAll = function(a, b) {
    let sum = 0, temp;
    for (let i = 0; i < arguments.length; i++) {
        if (!Number.isInteger(arguments[i]) || arguments[i] < 0) {
            return "ERROR";
        }
    }
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
