const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

var petCounts = pets.reduce(function (result, pet) {
  if (!result[pet]) {
    result[pet] = 1;
  } else {
    result[pet] = result[pet] + 1;
  }

  return result;
}, {});

console.log(petCounts);

const newArray = [...pets];
console.log(newArray);

newArray.push("fish");

console.log(newArray);
console.log(pets);

// let and const hoisting check ( let & const e hoisting hoina )

function newFunc() {
  console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
  const a = 1;
  console.log(a);
}

// newFunc();

// window te this keyword (window == this) eki kotha

// microTasking and event loop visualization

console.log("Start");

setTimeout(function () {
  console.log("Timeout 0!");
}, 0);

Promise.resolve("Promise Resolved Called").then((res) => {
  console.log(res);
});

console.log("End now");

// ==== Output ====
/*
 Start !
 End Now!
 Promise Resolved Called
 Timeout 0!
 */

// Asyc and await

const one = () => Promise.resolve("One!");

async function myFunc() {
  console.log("in function!");
  const res = await one(); // await keyword asle async function suspend hoi, then bakisob mircrotask hisebe execute hoi.
  console.log(res);
}

console.log("Before function!");
myFunc();
console.log("After function!");

// ==== Output ====
/*
 Before function
 in function!
 After function!
 One!
 */

// Synchronous programming problem visualization

function someLongRunningFunction() {
  let start = Date.now();
  while (Date.now() - start < 5000) {
    // do nothing
  }
  return "Hello";
}

console.log("Starting...");

let resultR = someLongRunningFunction();
console.log(resultR);

console.log("...Finishing");

// ==== Output ====
/*
  Starting...
  Hello  [ but taking long time in running, like 5 sec]- this is the problem
...Finishing
*/

//  Promise visualization

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise Resolved Called");
  }, 2000);
});

console.log(myPromise);

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// The Nullish Coalescing Operator

function expression1() {
  return null;
}
const expression2 = 4 * 5;
const mulResult = expression1() ?? expression2; // means first expression is null/undefined, tai second ta dekhbe

console.log(mulResult);

// ==== Output ====
// 20

function expression3() {
  console.log("expression1");
  return false;
}

function expression4() {
  console.log("expression2");
  return "Dillion";
}

const result = expression3() ?? expression4();
// zokhon dekhse je, first er ta false[mane undefined/null] na taile eita, true
// tai 2nd ta ar dekhar dorkar nai, short circuit hoise

console.log(result);

// ==== Output ====
// expression1
// false

console.log(console);

// Prototyping in JS

const obj1 = {
  name: "Ajoy Sarker",
  city: "Dhaka",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

const obj2 = {
  name: "Bijoy Sarker",
  city: "Tangail",
};
obj2.__proto__ = obj1; // eikhane inheritence kora hoilo, obj1 er sob obj2 te aisa porlo

obj2.getIntro();

//map to object and object to map

const mapItem = new Map([
  ["a", 1],
  ["b", 2],
]);

const obj = Object.fromEntries(mapItem.entries());

console.log(obj);

// ==== Output ====
// {a: 1, b: 2}

const mapNew = new Map(Object.entries(obj))

console.log(  mapNew)

// ==== Output ====
// Map(2) {'a' => 1, 'b' => 2}