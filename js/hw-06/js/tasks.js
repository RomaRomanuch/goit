import { users } from './users.js';

//task-1


const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));


//task-2

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));


//task-3

const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender)
.map(user => user.name);

console.log(getUsersWithGender(users, 'male'));

//task-4

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));


//task-5

const getUserWithEmail = (users, email) => users.find(user => user.email === email) ;

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


//task-6


const getUsersWithAge = (users, min, max) => users.filter(function(user){
  if(user.age < max && user.age > min) {
    return user;
  }
})
/// Написать стрелочную функцию!
 

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

//task-7

const calculateTotalBalance = users => users.reduce((acc, curr) => {
  return acc + curr.balance;
}, 0);

console.log(calculateTotalBalance(users));

//task-8


const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName))
.map(user => user.name)
  


console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//task-9

const getNamesSortedByFriendsCount = users => users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
  


console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



//task-10


const getSortedUniqueSkills = users => users.reduce((acc, user) => {
  acc.push(...user.skills);
   
  acc.sort();
  return acc;
}, []);


console.log(getSortedUniqueSkills(users));