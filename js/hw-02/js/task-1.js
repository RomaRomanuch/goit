let names = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let count = 0;

const logItems = function(array) {
  
  for (name of names) {
    count += 1;
    console.log(`${count} \- ${name}`);

  }
}; 

logItems(names);




