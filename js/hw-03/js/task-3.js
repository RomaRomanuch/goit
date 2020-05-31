

const findBestEmployee = function(employees) {
  let counter = 0;
  let bestEmployee;
  for (let key in employees) {
    if (employees[key] >= counter){
      counter = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
  ;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);





