// go through array with for loop and flip booleans to opposite value
// naudodami koki nors cikla, pakeiskite reiksmes i atvirkstines.
// 1. be funkcijos
// 2. su funkcija, kuri i parametrus priima masyva
// 3. isbandykite ivairius ciklus

let arrayOfBooleans = [true, false, false, true, true, true, false];
let newArrayBools = [false, true, true, false, false, false, true];
//console.log("original array:", arrayOfBooleans);

// 1. budas

for (let x = 0; x < arrayOfBooleans.length; x++) {
  arrayOfBooleans[x] = !arrayOfBooleans[x];
}

//console.log("array after for loop", arrayOfBooleans);

// 2. budas

function flipBools(array) {
  let newArray = [];
  for (let x = 0; x < array.length; x++) {
    newArray.push(!array[x]);
  }

  return newArray;
}

const newBools = flipBools(arrayOfBooleans);
//console.log("for'as funkcijoje:", newBools);

// 3. budas

const flippedBools = newBools.map((item) => (item = !item));
//console.log("simple map():", flippedBools);

// 4. budas

const flippingAgain = (array) => array.map((item) => (item = !item));
//console.log(flippingAgain(flippedBools));
//console.log(flippingAgain(arrayOfBooleans));

//------------------------------------------------------------------------

// 2. write a function hasSameBread():
// Given two arrays, which represent two sandwiches, return whether
// both sandwiches use the same type of bread (return true or false).
// The bread will always be found at the start and end of the array.

function hasSameBread(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1];
}

console.log(
  hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
  )
);

console.log(
  hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
  )
);

console.log(
  hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"])
);
