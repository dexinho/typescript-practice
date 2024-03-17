"use strict";
// Arrays & Tuples
const nArray = [1, 2, 3];
const tArray = [1, false, "hi"];
// Enums
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
// Objects
let employee = {
    name: "subject",
    date: new Date(),
};
const calculateTax = ({ amount, rate }) => {
    return amount * rate;
};
