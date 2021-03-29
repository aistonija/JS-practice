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

const arr = ["zuvis", "zvejyba", "ezeras", "meduolis"];
let result = "Mmmmm koks velniskai skanus";
// console.log(`1 budas: ${result} ${arr.pop()}`);

let lastElement = arr.pop();
let finalResult = result + " " + lastElement;
console.log(`2 budas: ${finalResult}`);

let concat = result.concat(" ", lastElement);
console.log(`3 budas: ${concat}`);
