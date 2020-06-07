const countTotalSalary = function(employees) {
  let summ = 0;
  for(let salary in employees) {
    summ += employees[salary];
  }
  return summ;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);