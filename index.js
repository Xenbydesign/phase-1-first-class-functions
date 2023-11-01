function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    return function anotherFunction() {}
}
function returnsAnAnonymousFunction() {
    return function () {}
}