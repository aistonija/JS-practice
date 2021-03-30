let one = {
  numbers: [25, 87, 684, 2874, 687, 28, 68],
  words: ["first", "second", "third", "fourth"],
  objects: [{ one: "EMPTY" }, { two: "replace to milk", three: "full" }],
  arrays: [[[[[[[[84, 85, 257, 577, "word", "small", "BIG"]]]]]]]],
};

// 1. create new key in object
// make it value to be first and last numbers from 'numbers' key(remove them from array)
// hint: use shift(), pop()

one.firstLast = [one.numbers.shift(), one.numbers.pop()];

// Edvar variantas:
one.twoNumber = [];

one.twoNumber.push(one.numbers.shift());

one.twoNumber.push(one.numbers.pop());

// 2. make something with number 2874 in 'numbers' so it becomes string, and replace 28 with $$

console.log(one);
