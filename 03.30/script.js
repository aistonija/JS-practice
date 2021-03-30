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

// 2. make something with number 2874 in 'numbers' so it becomes string and replace 28 with $$

//statinis variantas
// one.numbers[2] = one.numbers[2].toString();
// one.numbers[2] = one.numbers[2].replace("28", "$$$");

// dinamiskesnis variantas
let digit = one.numbers.indexOf(2874);
one.numbers[digit] = one.numbers[digit].toString().replace("28", "$$$");

// 3. take out last word from 'words' and put it to beginning of the array, make it to be upperCase

// hint: pop(), shift(), push(), unshift();
// words: ["FOURTH", "first", "second", "third"]
let newObj = one.words.pop().toUpperCase();
one.words.unshift(newObj);

// 4. replace second word in 'words' array to be 'secondddddd' and add its length to the and of word.
// Use indexOf to find where the words second stands, and then use splice method.

console.log(one);
