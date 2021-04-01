const library = [
  {
    author: "Bill-Junior Gates MacDonalds",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs junior",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins ",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// check if all readingStatus is true
// if yes sum up all titles and console log them

// if (
//   library[0].readingStatus &&
//   library[1].readingStatus &&
//   library[2].readingStatus
// ) {
//   console.log("jega");
// } else {
//   console.log("nesigavo");
// }

// susikuriu flag
let result = true;

library.forEach((item) => {
  // tikriname ar nors vienas yra false
  if (!item.readingStatus) {
    // jeigu bent viena false radome - bendra rezultata pakeiciame
    result = false;
  }
});

// console.log(result);

// check whether flag variable was true ar false
if (result) {
  // dynamic way
  let titles = [];
  library.forEach((item) => titles.push(item.title));
  console.log(titles.join(", "));

  // static way
  console.log(`${library[0].title}, ${library[1].title}, ${library[2].title} `);

  // if not all readingStatus is true (at least one false):
} else {
  // check each object in array readingStatus separately
  library.forEach((item) => {
    // for those which are positive
    if (item.readingStatus) {
      // create array of item author name splitted by space
      let namesArr = item.author.split(" ");
      console.log(namesArr);

      // map through array and leave only first letter
      let initials = namesArr.map((el) => el.charAt(0));
      initials = initials.join(".");
      //log their authors name and surname first letters
      console.log(initials);
    }

    // add new key "titleLength" to all objects, which represents that object title length
    item.titleLength = item.title.length;
  });
}

console.log(library);

// check if first object in array has longer title then last object in array
// if no push one more object to library array with you favorite author, title, and reading status

// remove first item from library array, put it to new variable "book"

// add new key to variable book "bookIsNew" set it to true

// check if book.booIsNew and library.length is more than 2
// if yes add book variable value to the end of library array

// console.log(library);
