//////////////////// JS BASICS RECAP /////////////////////

// 1. Pasirasyti funkcija, kuriai padavus:
// amziu ir limita, bus patikrinama, ar zmogus praeina sita salyga;

// jeigu salyga atitiks: log 'galite praeiti'
// jeigu salyga neatitinka: log 'jusu neileisime'

// const age = prompt("Iveskite amziu");

// console.log(Number(age));

// const ageVerifier = (amziausParametras, verifier) => {
//   let phrase;
//   if (amziausParametras > verifier) {
//     phrase = "galite praeiti";
//   } else {
//     phrase = "jusu neileisime";
//   }

//   return phrase;
// };

// console.log(ageVerifier(Number(age), 15));

// -------------------------------------------------------

// 2.

// let string = "vejas man pasake vien tavo varda";
// let arr = [];

// * - check if string has more than 10 symbols in it
// * - if yes add first and last symbol to array

// patikrinti ar stringas turi daugiau nei 10 simboliu
// jei taip - pirma ir paskutini stringo simbolius ideti i masyva

// console.log(string.length);

// if (string.length > 10) {
//   arr.push(string.charAt(0));
//   arr.push(string.charAt(string.length - 1));
// }

// console.log(arr);

// -------------------------------------------------------

// * - remove last element from array, add it to result string, console log both of them. use array.pop() method

// * - naudojant array.pop() metoda:
// * - is masyvo isimti paskutini elementa.
// * - iskonsologinti result stringa su is masyvo isimtu elementu

// const arr = ["zuvis", "zvejyba", "ezeras", "meduolis"];
// let result = "Mmmmm koks velniskai skanus";
// // console.log(`1 budas: ${result} ${arr.pop()}`);

// let lastElement = arr.pop();
// let finalResult = result + " " + lastElement;
// console.log(`2 budas: ${finalResult}`);

// let concat = result.concat(" ", lastElement);
// console.log(`3 budas: ${concat}`);

// ------------------------------------------------------

// * - // Get authors name from array, make authorsName value to be string with authors name and surname

// const authorsNameHidden = [
//   47,
//   "saldytuvas",
//   [
//     "5877",
//     [654, "Danute"],
//     99,
//     "",
//     [88, 6547, 686, "paprika", 1, [44, "Neimontaite"]],
//   ],
// ];

// let authorsName;
// let firstName = authorsNameHidden[2][1][1];
// let lastName = authorsNameHidden[2][4][5][1];
// authorsName = firstName.concat(" ", lastName);
// console.log(authorsName);

// ------------------------------------------------------

const redCar = {
  model: "audi",
  engineOn: false,
  wheels: 4,
  fuel: 40,
  speed: 0,
  broken: false,
  people: ["John", "Lucy", "Marta", "Fat Joe"],
};

// * - Get passengers count,
// * - log string "red (Car Model) was standing by the road with (number) people inside"

let passengersCount = redCar.people.length;

console.log(
  `red ${redCar.model} was standing by the road with ${passengersCount} people inside`
);

// * - change engineOn value to opposite
// * - log "(First person from people array) started engine and began to ride",

redCar.engineOn = !redCar.engineOn;
console.log(`${redCar.people[0]} started engine and began to ride`);

// * - increase car speed by 60, decrease fuel by 3,
// log "at first car speed was (speed), they had (fuel) left"

redCar.speed += 60;
redCar.fuel -= 3;

console.log(
  `at first car speed was ${redCar.speed}, they had ${redCar.fuel} litres of fuel left`
);

// * - increase car speed by 60, decrease fuel by 5, log "later car speed was (speed, they had (fuel) left"

redCar.speed += 60;
redCar.fuel -= 5;

console.log(
  `later car speed was ${redCar.speed}, they had ${redCar.fuel} litres of fuel left`
);

// * - check if car speed is more than 100 and passengers count is more than 3
// if yes subtract 1 from wheels and change broken to opposite value

if (redCar.speed > 100 && redCar.people.length > 3) {
  redCar.wheels--;
  redCar.broken = !redCar.broken;
}

///////////////// additional tasks ///////////////////////

// * - log "while driving at (speed) kmh, one wheel went off so car was forced to stop"

// * - change engineOn to opposite value, and speed to 0 kmh

// * - log "(first person name) got out to check the problem, and he saw only (wheels) was left"

// * - log "ohh no, said (any girl from people array), looks like car was loaded too much, so we lost one wheel"

// * - log "i have an idea, said (any girl from people array), we should take (last person in people array) out and leave him by the road"

// * - log "great idea! shouted (first person from people array)"

// * - remove last person from people array, make oneByTheRoad value to be removed persons name

// * - add one to wheels, change engineOn and broken values to opposite

// log "few moments later car was hitting the road with (people count) passengers inside"

// log "while (oneByTheRoad) was left glancing surly at red (car model) vanishing in horizon"

// subtract 6 from fuel and log "car successfully reached home with (fuel) left and all (people count) people"
console.log(redCar);
