const curry = function (fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c);
            }
        }
    }
}

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

const sum2 = (a,b,c) => a+b-c
const curriedSum2 = curry(sum2);

