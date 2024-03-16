type Test = {
  num: number;
  str: string;
};

const test = ({ a, b }: { a: number; b: number }): Test => {
  return {
    num: a + b,
    str: "a",
  };
};

console.log(test({ a: 10, b: 20 }));
