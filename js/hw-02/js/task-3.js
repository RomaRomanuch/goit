const findLongestWord = function(string) {
  let stringSplit = string.split(' ');
  let longestWord = stringSplit[0];
  for(let i = 0; i < stringSplit.length; i += 1){
    if(stringSplit[i].length > longestWord.length) {
      longestWord = stringSplit[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));

