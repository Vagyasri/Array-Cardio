/* eslint-disable no-console */
import './style.css';

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  {
    first: 'Albert', last: 'Einstein', year: 1879, passed: 1955,
  },
  {
    first: 'Isaac', last: 'Newton', year: 1643, passed: 1727,
  },
  {
    first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642,
  },
  {
    first: 'Marie', last: 'Curie', year: 1867, passed: 1934,
  },
  {
    first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630,
  },
  {
    first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543,
  },
  {
    first: 'Max', last: 'Planck', year: 1858, passed: 1947,
  },
  {
    first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979,
  },
  {
    first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852,
  },
  {
    first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905,
  },
  {
    first: 'Lise', last: 'Meitner', year: 1878, passed: 1968,
  },
  {
    first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909,
  },
];

const peopleList = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank',
];

// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventors1500 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
console.table(inventors1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const names = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.table(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// const ord = inventors.sort((inventor1, inventor2) => (inventor1.year > inventor2.year ? 1 : -1));
const birthdate = inventors.sort((a, b) => a.year - b.year);
console.table(birthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const yrTotal = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(yrTotal);

// 5. Sort the inventors by years lived

const oldest = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const boulevards = document.querySelectorAll('.mw-category-group > ul > li > a');
// const de = Array.from(boulevards).filter((boulevard) => boulevard.textContent.includes('de'));
// console.table(de);

// const boulevards = document.querySelector('.mw-category');
// const links = Array.from(boulevards.querySelectorAll('a'));
// or const links = [...boulevards.querySelectorAll('a')]; // Spread operator

// const de = links
//   .map((link) => link.textContent)
//   .filter((name) => name.includes('de'));

// console.table(de);

// 7. sort Exercise
// Sort the peopleList alphabetically by last name
const alpha = peopleList.sort((lastOne, nextOne) => {
  const [aLast] = lastOne.split(', ');
  const [bLast] = nextOne.split(', ');
  // const bLast = nextOne.split(', '); // same result
  return aLast > bLast ? 1 : -1;
});
console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const instances = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item] += 1;
  return obj;
},
{});
console.table(instances);

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const is19 = people.some((person) => (2021 - person.year) >= 19);
console.log(is19);

// Array.prototype.every() // is everyone 19 or older?

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423