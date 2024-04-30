apple - 33
const sum = (a, b) => a + b;

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
