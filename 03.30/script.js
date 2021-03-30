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

let wordIndex = one.words.indexOf("second");
one.words.splice(wordIndex, 1, "secondddddd");

// 5. in key 'objects', make EMPTY to be in lower case, and replace its last letter 'y' with '88'.
// Use charAt() & replace()
//rezultatas: objects: [{ one: "empt88" }, { two: "replace to milk", three: "full" }],

// let word = one.objects[0].one;
// let letterToReplace = word.charAt(word.length - 1);
// let newLetter = "88";
// word = word.replace(letterToReplace, newLetter).toLowerCase();

// one.objects[0].one = word;

one.objects[0].one = one.objects[0].one
  .replace(one.objects[0].one.charAt(one.objects[0].one.length - 1), "88")
  .toLowerCase();

// 6. in key 'arrays' make all text in lower case to be upper case and vice versa.
// use foreach and if.

// hint steps:
// 1. create new variable which holds your array you want to iterate
// 2. start forEach cycle
// 3. check if item is string -
// 4. if yes, check if string is lowerCase - if yes - change to upperCase
// 5. else - change to lowerCase
// 6. rewrite old array values with new array values

// original:
// arrays: [[[[[[[[84, 85, 257, 577, "word", "small", "BIG"]]]]]]]]

// expected:
// arrays: [[[[[[[[84, 85, 257, 577, "WORD", "SMALL", "big"]]]]]]]],

let myArray = one.arrays[0][0][0][0][0][0][0];
// naujas tuscias masyvas, i kuri desime reiksmes
let newArr = [];

myArray.forEach((item) => {
  if (item === String(item)) {
    if (item === item.toLowerCase()) {
      item = item.toUpperCase();
    } else {
      item = item.toLowerCase();
    }
  }

  // prasisukus ciklui pakeista reiksme ikeliama i nauja masyva, kuris buvo sukurtas ir issaugotas pries kvieciant cikla (70eilute)
  newArr.push(item);
});

console.log(newArr);

one.arrays[0][0][0][0][0][0][0] = newArr;

console.log(one);
