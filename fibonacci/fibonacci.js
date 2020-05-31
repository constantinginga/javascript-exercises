const fibonacci = function(n) {
    // if (n > 0) {
    //     return (+n === 1 || +n === 2) ? 1 : fibonacci(+n - 1) + fibonacci(+n - 2);
    // }
    // else {
    //     return 'OOPS';
    // }
    return (n > 0) ? (+n === 1 || +n === 2) ? 1 : fibonacci(+n - 1) + fibonacci(+n - 2) : 'OOPS';
}

module.exports = fibonacci
