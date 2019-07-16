function fn() {
    log('Hoisting the function');

    function log(value) {
        console.log(value);
    }
}

fn();

/**
function fn() {
    function log(value) {
        console.log(value);
    }

    log('Hoisting the function');
}
 */