"use strict";
const calculateTaxes = ({ amount, rate, date, readOnly, }) => {
    console.log(date, readOnly);
    if (amount > 1000)
        return amount * rate;
};
const identity = (arg) => {
    return arg;
};
let output = identity(123); // Type of 'output' will be 'number'
console.log(calculateTaxes({
    amount: 10000,
    rate: 0.1,
    date: new Date(),
    readOnly: false,
}));
