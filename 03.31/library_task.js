const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: true,
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

let result = true;

library.forEach((item) => {
  if (!item.readingStatus) {
    result = false;
  }
});

// console.log(result);
// if not all readingStatus is true (at least one false):

if (result) {
  // dynamic way
  let titles = [];
  library.forEach((item) => titles.push(item.title));
  console.log(titles.join(", "));

  // static way
  console.log(`${library[0].title}, ${library[1].title}, ${library[2].title} `);
} else {
  //write code here
}

// check each object in array readingStatus separately
// for those which are positive log their authors name and surname first letters

// add new key "titleLength" to all objects, which represents that object title length

// check if first object in array has longer title then last object in array
// if no push one more object to library array with you favorite author, title, and reading status

// remove first item from library array, put it to new variable "book"

// add new key to variable book "bookIsNew" set it to true

// check if book.booIsNew and library.length is more than 2
// if yes add book variable value to the end of library array

// console.log(library);
