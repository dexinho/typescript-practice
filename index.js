var test = function (_a) {
    var a = _a.a, b = _a.b;
    return {
        num: a + b,
        str: "a",
    };
};
console.log(test({ a: 10, b: 20 }));
