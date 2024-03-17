"use strict";
const calculateTaxes = ({ amount, rate, date, readOnly, }) => {
    console.log(date, readOnly);
    if (amount > 1000)
        return amount * rate;
};
console.log(calculateTaxes({
    amount: 10000,
    rate: 0.1,
    date: new Date(),
    readOnly: false,
}));
const obj2 = {
    amount: 1,
    rate: 1,
    date: new Date(),
    readOnly: false,
};
obj2.amount = 10;
