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

console.log(
  calculateTaxes({
    amount: 10000,
    rate: 0.1,
    date: new Date(),
    readOnly: false,
  })
);

const obj2: CalculateTaxes = {
  amount: 1,
  rate: 1,
  date: new Date(),
  readOnly: false,
};

obj2.amount = 10;
