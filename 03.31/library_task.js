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
    readingStatus: false,
  },
];

// check if all readingStatus is true
// if yes sum up all titles and console log them

// if not all readingStatus is true (at least one false):
// check each object in array readingStatus separately
// for those which are positive log their authors name and surname first letters
// also add new key "titleLength", which represents that object title length

// check if first object in array has longer title then last object in array
// if no push one more object to library array with you favorite author, title, and reading status

// remove first item from library array, put it to new variable "book"

// add new key to variable book "bookIsNew" set it to true
// check if book.booIsNew and library.length is more than 2
// if yes add book variable value to the end of library array
