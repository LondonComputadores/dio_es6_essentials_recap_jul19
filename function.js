function getName() {
    return 'Alexandre Paes'
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);