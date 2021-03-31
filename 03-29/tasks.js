// 1. Darbas su tekstu (strings)

let myTask = "Hello, this text is in upper case or in lower case";

// 1.1. * - console.log texto ilgį;
console.log(myTask.length);

// 1.2. * - naudojant replace() metodą pakeisti žodį 'upper' į 'uber';
myTask = myTask.replace("upper", "uber");
console.log(myTask);

// 1.3. * - atvaizduoti tekstą didžiosiomis raidėmis;
console.log(myTask.toUpperCase());

// 1.4. * - iš turimo teksto išrinkti raides per jų indeksus myTask[0] ir log'inti reikšmę: slow car
let slowCar =
  myTask[10] +
  myTask[3] +
  myTask[4] +
  myTask[41] +
  " " +
  myTask[28] +
  myTask[29] +
  myTask[26];
console.log(slowCar);

// 1.5. * - suraskite, kokiu indexu sakinyje stovi kablelis, atvaizduokite tokiu formatu:
// index of ",": 5

let symbol = myTask.indexOf(",");
console.log(`index of "${myTask[symbol]}":`, symbol);

// --------------------------------------------------------------------------

// 2. * - Pasinaudodami duotais kintamaisiais, sudarykite sakinį:

// "B is the second letter of alphabet"

const firstOrSecond = ["first", "second"];
const valueOne = "A is the";
const valueTwo = "letter of alphabet";

let result = `${valueOne.replace("A", "B")} ${firstOrSecond[1]} ${valueTwo}`;
console.log(result);

// 2.1. * - Susikurtį kintamąjį su reikšme: "this string length is (counted symbols) symbols length".
// console.log šį sakinį, kartu ir apskaičiuojant sakinio ilgį.

const string = "this string length is";
let finalResult = `${string} ${string.length}`;
console.log(finalResult);

// ------------------------------------------------------------------------------------

// 3. * - iš duoto masyvo reikšmių, esančių viduje, sudarykite sakinį:
// "ohh baby it's cold outside"

const randoms = [0, 20, "ohh", [78, "baby"], ["it's cold", 11, 22], "outside"];

let coldOutside = `${randoms[2]} ${randoms[3][1]} ${randoms[4][0]} ${randoms[5]}`;
console.log(coldOutside);

// ------------------------------------------------------------------------------------

// 4. * - naudodami .push() ir unshift() metodus, iš pagrindinio masyvo į ascendingOrder masyvą sudėkite reikšmes išrikiuotai didėjančia tvarka.
// rezultatas: ascendingOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// numbersRandom lieka originalus, nekeistas.

const numbersRandom = [0, 5, 6, 8, 1, 2, 3, 7];
const ascendingOrder = [4];

ascendingOrder.unshift(
  numbersRandom[0],
  numbersRandom[4],
  numbersRandom[5],
  numbersRandom[6]
);

ascendingOrder.push(
  numbersRandom[1],
  numbersRandom[2],
  numbersRandom[numbersRandom.length - 1],
  numbersRandom[3]
);

console.log(ascendingOrder);

// ------------------------------------------------------------------------------------

// 5. * - pakeisti 'pienas' i 'jogurtas', pabandyti įvairiais būdais:

const shoppingList = [
  "duona",
  "ledai",
  "maisto katinui",
  "bananai",
  "gyvenimo prasme",
  "pienas",
  "sokoladas",
];

// 5.1. statinis per index;

shoppingList[5] = "jogurtas";
console.log(shoppingList);

// 5.2 naudojant array.splice() metodą;

shoppingList.splice(5, 1, "jogurtukas");
console.log(shoppingList);

// 5.3. naudojant array.find() metodą įsitikinti, kad ieškomas produktas egzistuoja. Jei produktas egzistuoja - pakeičiama reikšmė, kitu atveju rodoma žinutė, kad tokio produkto nėra (if sąlyga)

const found = shoppingList.find((item) => item === "ledai");

if (found) {
  console.log(found);
} else {
  console.log("tokios reiksmes nera");
}

// 5.4. Pasirašyti funkciją, kuriai padavus parametrus pvz. masyvas, ieškoma reikšmė, nauja reikšmė, yra pakeičiama reikšmė, jeigu toks produktas buvo rastas.

// funkcija tiesiog surasti ir patikrinti ar yra
function findMe(array, value) {
  const found = array.find((item) => item === value);

  if (found) {
    console.log(`jusu ieskota reiksme '${found}' rasta`);
    return found;
  } else {
    console.log(`jusu ieskomos reiksmes '${value}' siame sarase nera`);
  }
}

const wasFound = findMe(shoppingList, "ledai");

if (wasFound) {
  const index = shoppingList.indexOf(wasFound);
  console.log(index);
  shoppingList.splice(index, 1, "kukuruzai");
  console.log(shoppingList);
}

//////////////////////////

// funkcija suradimui ir jeigu yra - pakeitimui
function findAndReplace(array, value, newValue) {
  const found = array.find((item) => item === value);

  if (found) {
    const index = array.indexOf(found);
    array.splice(index, 1, newValue);
  }
}

console.log(shoppingList);
findAndReplace(shoppingList, "gerda", "sasiuvinis");
console.log(shoppingList);

// ------------------------------------------------------------------------------------

// 6. * - Sukurti objektą, atitinkantį pateiktą struktūrą, su jūsų sugalvotomis reikšmėmis. Naudojame shift(), push(), pop(), unshift(), increment, if..

// name: string value,
// toysArray: array of 3-4 values ['value', 'value', 'value'],
// yearsOld: number,
// birthday: true,
// totalToys: null
// friends: array of three friends (objects), their names, and what they are doing at the moment

let data = {
  name: "Jerry",
  hasToys: ["teddy bear", "ball", "car", "soldier"],
  yearsOld: 12,
  birthDay: true,
  totalToys: null,
  friends: [
    {
      name: "Susana",
      activity: "at grandparents",
    },
    {
      name: "Tomy",
      activity: "baking cookies",
    },
    {
      name: "Brad",
      activity: "playing football",
    },
  ],
};

// 6.1. * - check if Jerry is having his birthday if yes do things:
// 6.2. * - remove teddy bear from hasToys array
// 6.3. * - add "ps4" to end of hasToys array
// 6.4. * - increment yearsOld by one
// 6.5. * - make totalToys key to always show length of hasToys array
// 6.6. * - log each of Jerry friends

// check if Jerry is having his birthday if yes do things:
if (data.birthDay) {
  // remove teddy bear from hasToys array
  data.hasToys.shift();

  // add "ps4" to end of hasToys array
  data.hasToys.push("ps4");

  // increment yearsOld by one
  data.yearsOld++;

  // make totalToys key to always show length of hasToys array
  data.totalToys = data.hasToys.length;

  // log Jerry's friends
  console.log(data.friends);
}

console.log(data);

// ------------------------------------------------------------------------------------

// 7. * - sukurti naują kintamąjį, kur abu sakiniai būtų sujungti į vieną, atskirti tarpu

let firstString = "this is my first string";
let secondString = "this is my second string";

let sum = `${firstString} ${secondString}`;
console.log(sum);

// 7.1. * - sukurti naują kintamąjį, kuris apskaičiuos pirmo ir antro stringo simbolių sumas.

let sumNr = firstString.length + secondString.length;
console.log(sumNr);

// 7.2. * - naudojant replace() metodą, pakeisti iš 'this' į 'that' abiejuose stringuose.

let replaced = `${firstString.replace("this", "that")} ${secondString.replace(
  "this",
  "that"
)}`;
console.log(replaced);

// 7.3. * - naudojant indexOf() metodą, surasti, kurioje vietoje stovi žodis 'is'.

// kodel ieskome su tarpais? Nes padavus tik 'is' raidziu derinys randamas pirmajame sakinio zodyje 'This', o mum reikia atskiro zodzio 'is'

// kodel + 1? Nes indexOf grazins nuo kur prasideda musu ieskomas derinys, siuo atveju, kadangi turime tarpa, jis grazins tarpo vieta, todel pridedame 1.
let newIs = sum.indexOf(" is ") + 1;
console.log(newIs);

// ------------------------------------------------------------------------------------

// 8. * - Atlikite veiksmus su duotu objektu:

let shop = {
  products: ["milk", "honey", "bred pita", "water", "socks"],
  productPrice: 164,
  shopWorksTill: 22,
  peopleInLine: ["first", "second", "third"],
  moneyInPocket: 500,
  currentTime: 21,
  wentForShopping: false,
};

// 8.1. * - patikrinkite ar dabartinis laikas (currentTime) yra mažiau nei parduotuvės darbo laikas (shopWorksTill)

// 8.2. * - jei sąlyga atitinka (true) - pakeiskite wentForShoppint į atvirkštinę reikšmę

// 8.3. * - Taip pat patikrinkite ar turite užtektinai pinigų (moneyInPocket) nusipirkti visiems produktams (pirmiausiai apsiskaičiuokite visų produktų kainą naudodami .length ir productPrice)

// 8.4. * - Jeigu pinigų užtenka, log visus produktus, kuriuos nusipirkote.

// 8.5. * - Jeigu pinigų neužteko, trečias žmogus eilėje (peopleInLine) turi būti jūsų vardas. Taip pat iš visos turimos sumos atimkite 256 ir išloginkite: "____ pinigų liko po apsipirkimo"

if (shop.shopWorksTill > shop.currentTime) {
  shop.wentForShopping = !shop.wentForShopping;
  if (shop.products.length * shop.productPrice < shop.moneyInPocket) {
    console.log(shop.products);
  } else {
    shop.peopleInLine[2] = "Aiste";
    shop.moneyInPocket -= 256;
    console.log(`${shop.moneyInPocket} money left after shopping`);
  }
}

// ------------------------------------------------------------------------------------

// 9. * - Atlikite veiksmus su duotu objektu:

let car = {
  wheels: 3,
  broken: true,
  gasoline: 3,
  driver: "Mister Twister",
  destination: "USA",
  musicIsPlaying: false,
  stuffInTrunk: [
    "ball",
    "dolphin",
    "empty bottles",
    "snails",
    "childhood dreams",
  ],
  kilometersMade: 0,
};

// 9.1. Patikrinkite ar automobilis eksploatuojamas.

// Jeigu ne, patikrinkite ar automobilis turi degalų. Jei ne, 'įpilkite' 5 litrus.

// Prie to pačio patikrinkite ar automobilis turi 4 ratus. Jeigu taip, 'broken' savybę pakeiskite į 'false' ir išloginkite "(driver) jau važiuoja į (destination)".

// 'Įsijunkite' muziką (musicIsPlaying)

//////

// Prie nuvažiuotų kilometrų pridėkite 70km.

// Patikrinkite ar automobilis nuvažiavo daugiau nei 350km. Jei taip - nustatykite broken į true, ir atimkite vieną ratą, išjunkite muziką.

//////

// Prie nuvažiuotų kilometrų pridėkite 70km.

// Patikrinkite ar automobilis nuvažiavo daugiau nei 350km. Jei taip - nustatykite broken į true, ir atimkite vieną ratą, išjunkite muziką.

//////

// Prie nuvažiuotų kilometrų pridėkite 120km.

// Patikrinkite ar automobilis nuvažiavo daugiau nei 350km. Jei taip - nustatykite broken į true, ir atimkite vieną ratą, išjunkite muziką.

//////

// Prie nuvažiuotų kilometrų pridėkite 220km.

// Patikrinkite ar automobilis nuvažiavo daugiau nei 350km. Jei taip - nustatykite broken į true, ir atimkite vieną ratą, išjunkite muziką.

if (car.broken) {
  if (car.gasoline > 0) {
    if (car.wheels < 4) {
      car.wheels = 4;
      car.broken = false;
      console.log(`${car.driver} are one the way to ${car.destination}`);
      car.musicIsPlaying = true;
    }
  }

  car.kilometersMade += 50;

  if (car.kilometersMade > 350) {
    car.broken = true;
    car.wheels -= 1;
    car.musicIsPlaying = false;
  }

  car.kilometersMade += 70;

  if (car.kilometersMade > 350) {
    car.broken = true;
    car.wheels -= 1;
    car.musicIsPlaying = false;
  }

  car.kilometersMade += 120;

  if (car.kilometersMade > 350) {
    car.broken = true;
    car.wheels -= 1;
    car.musicIsPlaying = false;
  }

  car.kilometersMade += 220;

  if (car.kilometersMade > 350) {
    car.broken = true;
    car.wheels -= 1;
    car.musicIsPlaying = false;
  }

  car.stuffInTrunk[2] = "";

  console.log(car.driver[0] + car.driver[car.driver.indexOf("T")]);
}
