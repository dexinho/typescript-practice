// Arrays & Tuples

const nArray: number[] = [1, 2, 3];
const tArray: [number, boolean, string] = [1, false, "hi"];

// Enums

enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// Objects

let employee: {
  name: string;
  date: Date;
} = {
  name: "subject",
  date: new Date(),
};

// Advanced Types & Functions

type CalculateTax = {
  amount: number;
  rate: number;
};

const calculateTax = ({ amount, rate }: CalculateTax): number => {
  return amount * rate;
};

const getTemperature = <T>(temp: T) => {
  return temp;
};

getTemperature<string>("200");
getTemperature<number>(200);

// Omit

type Customer = {
  id: number;
  name: string;
  value: number;
};

type Order = Omit<Customer, "id" | "value"> & { date: Date };

const human: Customer = { id: 1, name: "hehe", value: 10 };
const humanOrder: Order = { name: "hoho", date: new Date() };
