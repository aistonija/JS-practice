// 1. - Kino Bilietas;

// Bilieto kaina - dinamine, parametras i funkcija;

// Nuolaidos:
// - iki 6 metu: 80%;
// - nuo 7 iki 18: 60%;
// - nuo 19 iki 24: 20%;
// - nuo 25 iki 64: 0%;
// - nuo 65: 85%;

// Parašyti funkciją, kuriai padavus amžių ir bilieto kainą bus grąžinama apskaičiuota bilieto kaina.

const ticketPrice = (age, standardPrice) => {
  let price;

  if (age <= 6) {
    price = standardPrice * 0.2;
  } else if (age > 6 && age <= 18) {
    price = standardPrice * 0.4;
  } else if (age > 18 && age <= 24) {
    price = standardPrice * 0.2;
  } else if (age > 25 && age <= 64) {
    price = standardPrice;
  } else if (age >= 65) {
    price = standardPrice * 0.15;
  }
  return price;
};

// console.log(ticketPrice(2, 10));

//
