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

// 2. Ryklio ataka

// 2.1. Pagal duotus duomenis pasidaryti objekta su savybemis:

// Atstumas iki ryklio metrais:
// sharkDistance: random(0, 55)

// Ryklio greitis metrais per sekunde:
// sharkSpeed: random(4, 20)

// Atstumas metrais iki valties, kuri man reikia nuplaukti:
// boatDistance: random(7, 40)

// Mano greitis metrais per sekunde:
// humandSpeed: random(4, 5)

// Delfinas horizonte:
// delphin: random(0, 1)

// console.log objekta;
// console.log iškritusius duomenis string'e.
