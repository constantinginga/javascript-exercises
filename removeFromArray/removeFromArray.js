const removeFromArray = function(array, n) {
    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] === arguments[i]) {
                    array.splice(j, 1);
                }
            }
        }
    }
    return array;
}

module.exports = removeFromArray
