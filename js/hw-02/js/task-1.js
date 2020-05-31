let names = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function(array) {
  let count = 0;
  
  for (let i = 0; i < names.length; i += 1) {
    count += 1;
    console.log(`${count} \- ${names[i]}`);
  }
}; 

logItems(names);




