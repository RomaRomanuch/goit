const messageLimit = 40;

const formatString = function(message) {
  message = message.split('');
  if(message.length <=40){
    message = message.join('');
  }else {
    message.splice(40, Infinity, '...');
    message = message.join('');
  }
  return message;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));


