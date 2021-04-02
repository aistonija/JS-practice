// go through array with for loop and flip booleans to opposite value
// naudodami koki nors cikla, pakeiskite reiksmes i atvirkstines.
// 1. be funkcijos
// 2. su funkcija, kuri i parametrus priima masyva
// 3. isbandykite ivairius ciklus

let arrayOfBooleans = [true, false, false, true, true, true, false];
let newArrayBools = [false, true, true, false, false, false, true];
console.log("original array:", arrayOfBooleans);

// 1. budas

for (let x = 0; x < arrayOfBooleans.length; x++) {
  arrayOfBooleans[x] = !arrayOfBooleans[x];
}

console.log("array after for loop", arrayOfBooleans);

// 2. budas

function flipBools(array) {
  let newArray = [];
  for (let x = 0; x < array.length; x++) {
    newArray.push(!array[x]);
  }

  return newArray;
}

const newBools = flipBools(arrayOfBooleans);
console.log("for'as funkcijoje:", newBools);

// 3. budas

const flippedBools = newBools.map((item) => (item = !item));
console.log("simple map():", flippedBools);

// 4. budas

const flippingAgain = (array) => array.map((item) => (item = !item));
console.log(flippingAgain(flippedBools));
console.log(flippingAgain(arrayOfBooleans));
