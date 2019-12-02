document.getElementById("app").innerHTML = `
<h3>Hello Vanilla!</h3>
<div>Chek console pls</br></br>
<a href="https://github.com/HowProgrammingWorks/Reusable/blob/master/Exercises.ru.md">Solution for this</a>
</div>
`;

//identificators
let name = "Oleg";
const YEAR = 1995;
//console.log(`${name} was born in ${YEAR}`);

const helloFunc = name => `Hello ${name}`;
//console.log(helloFunc(name));

//for
const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
//console.log("range", range(30, 15));

const rangeOdd = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    i % 2 > 0 && result.push(i);
  }
  return result;
};
//console.log("rangeOdd", rangeOdd(15, 30));

//functions
const average = (a, b) => (a + b) / 2;
//console.log(average(10, 5));

const square = x => x ** 2;
//console.log(square(11));

const cube = x => x ** 3;
//console.log(cube(111));

const calculate = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    const s = square(i);
    const c = cube(i);
    const r = average(s, c);
    result.push(r);
  }
  return result;
};
//console.log(calculate());

//objects

const person1 = {
  name: "Peter"
};

let person2 = {
  name: "Dan"
};

person1.name = "Fred";
person2.name = "Jan";
person1.age = 23;
person2.age = 25;
//console.log(person2);

person2 = { name: "Bob", age: 18 };
//console.log(person1);
//console.log(person2);

const createUser = (name, city) => ({ name, city });

const person3 = createUser("Oleg", "Sankt-Peterburg");
//console.log(person3);

//Collections

const numBooks = [
  {
    name: "Anna",
    phone: 89911223300
  },
  {
    name: "Oleg",
    phone: 89945454545
  },
  {
    name: "Redis",
    phone: 777
  }
];

const findPhoneByName = name => {
  for (const person of numBooks) {
    if (person.name === name) return person.phone;
  }
  return "People is not define";
};
//console.log(findPhoneByName("Oleg"));

const hashNumBooks = {
  Anna: 89911223300,
  Oleg: 89945454545,
  Redis: 777
};

const hashFindPhoneByName = name => hashNumBooks[name];
//console.log(hashFindPhoneByName("Anna"));

//console.log('---lesson 2---')

var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  //console.log(foo)
}

bar();

const inc1 = n => ++n;
//console.log(inc1(5))

const inc2 = Num => (Num.n += 1);
//console.log(inc2({n: 7}))

const arr = [
  true,
  "hello",
  5,
  12,
  -200,
  false,
  false,
  "word",
  0.325,
  "0011",
  {},
  [],
  { n: 1 },
  [2, 3],
  null,
  300545600234,
  undefined,
  NaN
];
const keys = {
  object: 0,
  array: 0,
  boolean: 0,
  string: 0,
  number: 0,
  undefined: 0
};

const typeCount = (arr, types) => {
  for (let val of arr) {
    const type = typeof val;
    console.log(val);
    if (Array.isArray(val)) {
      types.array += 1;
    } else {
      types[type] += 1;
    }
  }
};
typeCount(arr, keys);
console.log(keys);
console.log(arr.length);
