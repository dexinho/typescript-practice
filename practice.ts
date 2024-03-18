type CalculateTaxes = {
  amount: number;
  rate: number;
  date: Date;
  readonly readOnly: boolean;
};
const calculateTaxes = ({
  amount,
  rate,
  date,
  readOnly,
}: CalculateTaxes): number | void => {
  console.log(date, readOnly);
  if (amount > 1000) return amount * rate;
};

const identity = <T>(arg: T): T => {
  return arg;
};

let output = identity<number>(123); // Type of 'output' will be 'number'

console.log(
  calculateTaxes({
    amount: 10000,
    rate: 0.1,
    date: new Date(),
    readOnly: false,
  })
);
